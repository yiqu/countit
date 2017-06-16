import { Component } from '@angular/core';

@Component({
  selector: 'input-area',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  placeholderText: string = "Enter text to analyze...";
  inputText: string;

  onKeyup() {
    // Extract the 'words' out of the input. reference for 
    // regex used: http://regexr.com/3g6db
    console.log(this.inputText.match(/\b[^\d^_\W]+\b/g)); 
  }
}
