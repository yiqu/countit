/**
 * Class that represent a word's details.
 */
export class WordDetail {
  word: string;
  count: number;
  displayPercent: string;
  percent: string;
  bgColor: string;
  hideDetail: string;

  /**
   * Constructor to create a Word Detail object. This contains word, count,
   * percent, display percent for css, background-color for chip, hidden flag.
   * 
   * @param {string} word word
   * @param {number} count count
   * @param {string} percent percent
   * @param {string} bgColor percent for css
   * @param {string} hideDetail hidden flag, false on default
   */
  constructor(word: string, count: number, percent: string, 
      bgColor: string = "", hideDetail: string = "none") {
    this.word = word;
    this.count = count;
    this.displayPercent = percent;
    this.percent = percent;
    this.bgColor = this.randColor();
    this.hideDetail = hideDetail;
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

  setDisplayPercent(value) {
    this.displayPercent = (+value + 15) + "%";
  }

  getWordName() {
    return this.word;
  }
}