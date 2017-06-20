import { Component } from '@angular/core';
import { WordService } from '../shared/word.service';
import { WordDetail } from '../shared/word.model';


/**
 * Result component class.
 * 
 */
@Component({
  selector: 'result-area',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  chipDefaultTextColor: string = "#000";
  googleDefineUrl: string = "https://www.google.com/search?q=definition+for+";


  /**
   * Constructor
   * 
   * @param {WordService} wordService - injected Word Service
   */
  constructor(public wordService: WordService) {}


  /**
   * Show details for the Word chip user clicked on.
   * 
   * @param {WordDetail} clicked word to show details for
   */
  chipSelect(clicked: WordDetail): void {
    clicked.hideDetail = clicked.hideDetail === "inherit" ? "none" : "inherit";
  }


  /**
   * Open up new browser window to Google for word definition.
   * 
   * @param {WordDetail} clicked - Word clicked on
   */
  getDefinition(clicked: WordDetail): void {
     window.open(this.googleDefineUrl + clicked.word, "_blank");
  }
}
