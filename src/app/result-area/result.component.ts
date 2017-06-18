import { Component } from '@angular/core';
import { WordService } from '../shared/word.service';

@Component({
  selector: 'result-area',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  constructor(private wordService: WordService) {}

  color: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

 
}
