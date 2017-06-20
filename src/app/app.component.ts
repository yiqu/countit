import { Component } from '@angular/core';


/**
 * App root component class.
 * 
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "Text Analyzer"
}