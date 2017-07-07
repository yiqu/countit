import { Component } from '@angular/core';

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
  public appVersion;

  constructor() {
    this.appVersion = appVersion
  }

}