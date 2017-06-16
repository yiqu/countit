import { Component } from '@angular/core';

@Component({
  selector: 'result-area',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {


  onClear() {
    console.log('hi');
  }
}
