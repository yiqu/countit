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
    for (let i=0; i<5; i++) {
      testArray.push(new WordDetail("Kevin"+i, i+5, '20', this.randColor()));
    }
    testArray[0].displayPercent = '100%';
    testArray[1].displayPercent = '50%';
    testArray[2].displayPercent = '40%';
    testArray[3].displayPercent = '15%';
    testArray[4].displayPercent = '5%';

    this.wordDetailArray = testArray;
    console.log(testArray);
  }


  /**
   * Generate a high hex value in range of 200 to 255
   * 
   * @return {string} hex value
   */
  randHex() {
    return (Math.floor(Math.random() * 56) + 200).toString(16);
  }


  /**
   * Generate a light color in hex value
   * 
   * @return {string} hex value, ie. #ffffff
   */
  randColor() {
    return "#" + this.randHex() + "" + this.randHex() + "" + this.randHex();
  }
}