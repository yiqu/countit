import { Component } from '@angular/core';
import { WordService } from '../shared/word.service';

@Component({
  selector: 'input-area',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  placeholderText: string = "Enter text to analyze...";
  inputText: string = "";

  constructor(private wordService: WordService) {}

  onKeyup() {
    // Extract the 'words' out of the input. reference for 
    // regex used: http://regexr.com/3g6db
    this.wordService.calculate(this.extractWords(this.inputText));
    
  }

  extractWords(input: string): Array<string> {
    return input.match(/\b[^\d^_\W]+\b/g);
  }
  


}
