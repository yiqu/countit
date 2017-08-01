import { Injectable } from '@angular/core';
import { WordDetail } from './word.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Injectable Word Service. Calculations are done here.
 */
@Injectable()
export class WordService {

  // Array used by template
  wordDetailArray: Array<string> = [];
  // Array of unique words parsed
  existingArray: Array<WordDetail> = [];
  // default stop words toggle state
  stopWordsToggleState: boolean = true;

  /**
   * Creates a new WordService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}


  /**
   * Calculate the count and and percentage for display
   * 
   * @param {Array<string>} inputArray array to do calculations on
   * @return {Array<WordDetail>} array to send to result component to display
   */
  calculate(inputArray: Array<string>): void {
    console.log("stopwords: " + this.stopWordsToggleState);

    this.wordDetailArray = inputArray;
    this.existingArray = [];
    let largestDisplayPercent = 0;

    // Create the Words and set the count
    for (let i of inputArray) {
      if (this.containsAttributeValue(i, this.existingArray)) {
        for (let j of this.existingArray) {
          if (i === j.word) {
            j.count ++;
            break;
          }
        }
      } else {
        let word = new WordDetail(i, 1, "50%");
        this.existingArray.push(word);
      }
    }

    // Sort it by DESCENDING
    this.existingArray.sort((a,b) => {
      return b.count - a.count
    });

    // Calculate and set the display percent and css percent
    for (let word of this.existingArray) {
      word.percent = this.calculatePercentage(word.count, inputArray.length) + "%";
      word.setDisplayPercent(this.calculatePercentage(word.count, inputArray.length));
    }

    /**
     * To make use of the wasted white space, re-calculate the display percent. 
     * This way, the word bars are longer.
     * 
     * Formula used: Display percent = (100 - percent) / 2 + percent
     *
     */
    if (inputArray.length > 0) {
      let highestPercent = this.existingArray[0].getDisplayPercent();
      let widthToAdd;
      if (highestPercent <= 99) {
        widthToAdd = (100 - highestPercent) / 2;
      } else {
        widthToAdd = 0;
      }

      // Add the extra width to the display percent.
      for (let word of this.existingArray) {
        word.setDisplayPercent(word.getDisplayPercent() + widthToAdd);
      }
    }

  }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getStopWords(): Observable<string[]> {
    return this.http.get('assets/stopwords.json')
                    .map((res: Response) => res.json())
    //              .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  /**
   * Loop through Array of Objects and find if the attribute "word"'s value
   * equals to the given string. WordDetail{word: "foo"} will return true if supplied
   * value is "foo".
   * 
   * @param {string} value value to match
   * @param {Array<WordDetail>} currentArray array to look in 
   * @return {boolean} true there is a match, false otherwise
   */
  containsAttributeValue(value: string, currentArray: Array<WordDetail>): boolean {
    return currentArray.filter((record) => {
      return record.word === value
    }).length > 0;
  }


  /**
   * Calculate the percent based on total number of words entered.
   * 
   * @param {number} value value 
   * @param {number} total total words entered by user
   * @return {number} percentage. return 0 if total is 0
   */
  calculatePercentage(value, total): number {
    if (total !== 0) {
      return +((value / total) * 100).toFixed(2); 
    }
    return 0;
  }
}