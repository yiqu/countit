/**
 * Class that represent a word's detail
 */
export class WordDetail {
  word: string;
  count: number;
  displayPercent: string;
  bgColor: string;

  /**
   * Constructor 
   * 
   * @param
   */
  constructor(word: string, count: number, percent: string, bgColor: string) {
    this.word = word;
    this.count = count;
    this.displayPercent = percent;
    this.bgColor = bgColor;
  }
}