import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from "@angular/animations";
import { WordService } from '../shared/word.service';
import { WordDetail } from '../shared/word.model';


/**
 * Result component class.
 * 
 */
@Component({
  selector: 'result-area',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  animations: [
    trigger('slideIn', [
      //state("active", style({transform: 'translateX(0)'})), // end look at the active state
      // Coming in..
      transition('inactive => active',
        animate('0.2s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ),
      // Leaving page..
      
    ])
  ]
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
