import { Component } from '@angular/core';
import { WordService } from '../shared/word.service';
import { WordDetail } from '../shared/word.model';

@Component({
  selector: 'result-area',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  constructor(private wordService: WordService) {}

  chipTextColor: string = "#000";

  chipSelect(clicked: WordDetail) {
    console.log(clicked);
  }
}
