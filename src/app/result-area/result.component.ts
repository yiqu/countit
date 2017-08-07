import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from "@angular/animations";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
export class ResultComponent implements OnInit {
  chipDefaultTextColor: string = "#000";
  googleDefineUrl: string = "https://www.google.com/search?q=definition+for+";
  stopWordsLabel: string;
  errorMessage: string;
  

  /**
   * Constructor. Inject word service, and update toggle label.
   * 
   * @param {WordService} wordService - injected Word Service
   */
  constructor(public wordService: WordService, 
    public router: Router, 
    public route: ActivatedRoute) {
      this.updateToggleLabel();
  }


  /**
   * On init, executed once.
   * Get query params and toggle stop words.
   */
  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
    // Defaults to ignoreStopWords=true if no query param provided.
      if (params['ignoreStopWords'] !== undefined) {
        this.wordService.stopWordsToggleState = (params['ignoreStopWords']==="true");
      } else {
        this.router.navigate(['/'], {queryParams: {
          ignoreStopWords: this.wordService.stopWordsToggleState
        }});
      }
    });
    // make HTTP call for stop words list
    this.wordService.getStopWords()
      .subscribe (
        (res) => {
          this.wordService.stopWords = res;
        },
        (error) => {
          this.errorMessage = <any>error
        },
        () => {
          // executed on completion
        }
      );

  }


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


  /**
   * Toggle action.
   * 
   * @param {any} event - event
   */
  toggleStopWords(event: any): void {
    this.wordService.stopWordsToggleState = event.checked;
    this.router.navigate(['/'], {queryParams: {
      ignoreStopWords: this.wordService.stopWordsToggleState
    }});

    if (this.wordService.parsedText !== undefined && this.wordService.parsedText.length > 0) {
      this.wordService.calculate(this.wordService.parsedText);
    }

    this.updateToggleLabel();
  }


  /**
   * Update the toggle label text.
   * 
   */
  updateToggleLabel(): void {
    this.stopWordsLabel = this.wordService.stopWordsToggleState === true ? 
      "Ignoring Stop Words" : "Keeping Stop Words";
  }
}
