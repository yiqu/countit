import { Injectable } from '@angular/core';
import { WordDetail } from './word.model';


/**
 * Injectable Word Service. Calculations are done here.
 */
@Injectable()
export class WordService {

  // Array used by template
  wordDetailArray: Array<string> = [];
  // Array of unique words parsed
  existingArray: Array<WordDetail> = [];

  /**
   * Constructor
   */
  constructor() {}


  /**
   * Calculate the count and and percentage for display
   * 
   * @param {Array<string>} inputArray array to do calculations on
   * @return {Array<WordDetail>} array to send to result component to display
   */
  calculate(inputArray: Array<string>): void {
    this.wordDetailArray = inputArray;
    this.existingArray = [];

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

    // Set the display percent and css percent
    for (let word of this.existingArray) {
      word.percent = this.calculatePercentage(word.count, inputArray.length) + "%";
      word.setDisplayPercent(this.calculatePercentage(word.count, inputArray.length));
    }

    // Sort it by DESCENDING
    this.existingArray.sort((a,b) => {
      return b.count - a.count
    });
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
      return Math.round((value / total) * 100); 
    }
    return 0;
  }
}