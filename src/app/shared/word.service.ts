import { Injectable } from '@angular/core';
import { WordDetail } from './word.model';

@Injectable()
export class WordService {

  wordDetailArray: Array<WordDetail> = [];

  constructor() {}

  /**
   * Calculate the count and and percentage for display
   * 
   * @param {Array<string>} inputArray array to do calculations on
   * @return {Array<WordDetail>} array to send to result component to display
   */
  calculate(inputArray: Array<string>) {
    //console.log(inputArray);
    let testArray: Array<WordDetail> = [];
    for (let i=0; i<2; i++) {
      testArray.push(new WordDetail("Kevin"+i, i, 20));
    }
    this.wordDetailArray = testArray;
  
  }
}