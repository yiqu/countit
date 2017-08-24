import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WordDetail } from './word.model';


/**
 * Injectable Word Service. Calculations are done here.
 */
@Injectable()
export class WordService {

  // User input's text
  rawInputArray: Array<string> = [];
  // Array of unique words parsed
  resultArray: Array<WordDetail> = [];
  // default stop words toggle state
  stopWordsToggleState: boolean = true;
  // raw text
  rawText: string = "";
  // Parsed text 
  parsedText: Array<string>;
  // stop words from HTTP
  stopWords: Array<string> = [];
  // counter to display stop words that were removed.
  stopWordCount: number = 0;

  /**
   * Creates a new WordService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}


  /**
   * Calculate the count and and percentage for display.
   * 
   * Parse the user input text, push to result array depending on toggle for 
   * stop words. 
   * 
   * Then set the display CSS:
   * To make use of the wasted white space, re-calculate the display percent. 
   * This way, the word bars are longer.
   * Formula used: Display percent = (100 - percent) / 2 + percent
   * 
   * @param {Array<string>} inputArray array to do calculations on
   * @return {Array<WordDetail>} array to send to result component to display
   */
  calculate(inputArray: Array<string>): void {
    this.rawInputArray = inputArray;
    this.resultArray = [];
    let largestDisplayPercent = 0;
    this.stopWordCount = 0;

    // Create the Words and set the count
    for (let i of inputArray) {
      // do not add repeated words to array to be displayed
      if (this.containsAttributeValue(i, this.resultArray)) {
        for (let j of this.resultArray) {
          if (i === j.word) {
            j.count ++;
            break;
          }
        }
      } else {
        // create a WordDetail object
        let word = new WordDetail(i, 1, "50%");
        // If toggle is on, do not push stop words to array
        if (this.stopWordsToggleState === true) {
          if (this.stopWords.indexOf(word.word) < 0) {
            this.resultArray.push(word);
          } else {
            // counter for stop words 
            this.stopWordCount ++;
          }
        } else {
          this.resultArray.push(word);
        }  
      }
    }
    
    // Sort it by DESCENDING
    this.resultArray.sort((a,b) => {
      return b.count - a.count
    });
    // Calculate and set the display percent and css percent
    for (let word of this.resultArray) {
      word.percent = this.calculatePercentage(word.count, inputArray.length) + "%";
      word.setDisplayPercent(this.calculatePercentage(word.count, inputArray.length));
    }
    // Set css 
    if (inputArray.length > 0 && this.resultArray.length > 0) {
      let highestPercent = this.resultArray[0].getDisplayPercent();
      let widthToAdd;
      if (highestPercent <= 99) {
        widthToAdd = (100 - highestPercent) / 2;
      } else {
        widthToAdd = 0;
      }

      // Add the extra width to the display percent.
      for (let word of this.resultArray) {
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
      //.do(data => console.log('server data:', data))  // debug
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
