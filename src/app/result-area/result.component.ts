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
    // Animations for chips bar
    trigger('slideIn', [
      // The 'active' state look and feel, which is normal
      state('active', style({transform: 'translateX(0) scale(1)'})),
      // adding chips animation. 
      // TODO: Only trigger for new words.
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(150)
      ]),

      // removing chips animation
      // TODO: change state to cleared only when users hit Clear button.
      transition('active => cleared', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ])
    ]),

    // Animations for chip bar detail div
    trigger('shrinkOut', [
      // word detail div style when shown
      state('inherit', style({height: '*' , display: 'inherit'})),
      // word detail div style when hidden
      state('none', style({ display: 'none'})),
      // removing the detail div
      transition('inherit => none', [
        style({height: '*'}),
        animate(100, style({height: 0}))
      ])
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
