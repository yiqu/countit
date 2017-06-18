/**
 * Class that represent a word's detail
 */
export class WordDetail {
  word: string;
  count: number;
  displayPercent: number;

  /**
   * Constructor 
   * 
   * @param
   */
  constructor(word: string, count: number, percent: number) {
    this.word = word;
    this.count = count;
    this.displayPercent = percent;
  }
}