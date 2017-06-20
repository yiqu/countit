import { Component } from '@angular/core';
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
export class InputComponent {
  // Placeholder text for textarea
  placeholderText: string = "Enter text to analyze...";
  // User input
  inputText: string = "";
  // Example text 
  exampleText: string = "4 Love is patient, love is kind. It does not envy, it does not boast, it is not proud." +
    "5 It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs." +
    "6 Love does not delight in evil but rejoices with the truth." +
    "7 It always protects, always trusts, always hopes, always perseveres." +
    "8 Love never fails. But where there are prophecies, they will cease; where there are tongues, they will be stilled; where there is knowledge, it will pass away.";
  
  exampleButtonText: string = "Try me!";

  /**
   * Constructor
   * 
   * @param {WordService} wordService - injected Word Service
   */
  constructor (private wordService: WordService) {}


  /**
   * Load up the example text.
   */
  clickExample(): void {
    if (this.inputText.trim() === "") {
      this.wordService.calculate(this.extractWords(this.exampleText));
      this.inputText = this.exampleText;
      this.exampleButtonText = "Clear";
    } else {
      this.inputText = "";
      this.wordService.calculate(this.extractWords(this.inputText));
      this.exampleButtonText = "Try me!";
    }
  }


  /**
   * Keyup action - calculate live.
   * Extract the 'words' out of the input. reference for 
   * regex used: http://regexr.com/3g6db
   */
  onKeyup(): void {
    this.wordService.calculate(this.extractWords(this.inputText));
    this.updateExampleButton();
  }


  /**
   * Helper function to parse out words.
   * 
   * @param {string} input - user input
   */
  extractWords(input: string): Array<string> {
    if (input === "") {
      return [];
    }
    return input.toLowerCase().match(/\b[^\d^_\W]+\b/g);
  }

  updateExampleButton() {
    this.inputText.trim() === "" ? (this.exampleButtonText = "Try me!") : (this.exampleButtonText = "Clear");
  }
}
