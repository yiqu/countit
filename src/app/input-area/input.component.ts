import { Component, OnInit } from '@angular/core';
import { WordService } from '../shared/word.service';


/**
 * Input component class.
 * 
 */
@Component({
  selector: 'input-area',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  // Placeholder text for textarea
  placeholderText: string = "Enter text to analyze...";
  // User input
  //inputText: string = "";
  // Example text 
  exampleText: string = "4 Love is patient, love is kind. It does not envy, it does not boast, it is not proud." +
    "5 It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs." +
    "6 Love does not delight in evil but rejoices with the truth." +
    "7 It always protects, always trusts, always hopes, always perseveres." +
    "8 Love never fails. But where there are prophecies, they will cease; where there are tongues, they will be stilled; where there is knowledge, it will pass away.";
  exampleButtonText: string = "Try me!";
  // Timer for user's keyboard keyup event
  timer: any;


  /**
   * Constructor
   * 
   * @param {WordService} wordService - injected Word Service
   */
  constructor (public wordService: WordService) {}


  /**
   * Update the button text on init.
   */
  ngOnInit() {
    this.updateExampleButton();
  }


  /**
   * Load up the example text.
   */
  clickExample(): void {
    if (this.wordService.rawText.trim() === "") {
      this.parseAndCalculate(this.exampleText);
      this.wordService.rawText = this.exampleText;
      this.exampleButtonText = "Clear";
    } else {
      clearTimeout(this.timer);
      this.wordService.rawText = "";
      this.parseAndCalculate(this.wordService.rawText);
      this.exampleButtonText = "Try me!";
    }
  }


  /**
   * Keyup action - calculate live.
   * Extract the 'words' out of the input. reference for 
   * regex used: http://regexr.com/3g6db
   */
  onKeyup(): void {
    this.updateExampleButton();
    clearTimeout(this.timer);
    let parsedWords = this.extractWords(this.wordService.rawText);
    this.wordService.parsedText = parsedWords;
    this.timer = setTimeout(() => {
      if (parsedWords != null) {
        this.wordService.calculate(parsedWords);
      }
    }, 500);
  }


  /**
   * Helper function to parse out rightly formed words.
   * 
   * @param {string} input - user input
   * @returns {Array<string>} - list of words without badly formed words
   */
  extractWords(input: string): Array<string> {
    if (input === "") {
      return [];
    }
    return input.toLowerCase().match(/\b[^\d^_\W]+\b/g);
  }


  /**
   * Update the Try Me! button text
   * 
   */
  updateExampleButton(): void {
    this.wordService.rawText.trim() === "" ? (this.exampleButtonText = "Try me!") 
      : (this.exampleButtonText = "Clear");
  }


  /**
   * Parse the text and call calculate on it.
   * 
   * @param {string} inputText string of text
   */
  parseAndCalculate(text):void {
    let parsedText = this.extractWords(text);
    this.wordService.parsedText = parsedText;
    this.wordService.calculate(parsedText);
  }
}