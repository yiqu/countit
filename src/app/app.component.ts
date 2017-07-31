import { Component } from '@angular/core';
import 'rxjs';
// App version
const { version: appVersion } = require('../../package.json')


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
  appVersion: string;

  constructor() {
    this.appVersion = appVersion
  }

}