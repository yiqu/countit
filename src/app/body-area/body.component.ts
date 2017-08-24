import { Component, OnInit } from '@angular/core';
// App version
const { version: appVersion } = require('../../../package.json')


/**
 * Component class for the app. The body component consists of 
 * 2 other components, input-area and result-area.
 */
@Component({
  moduleId: module.id,
  selector: 'body-component',
  templateUrl: 'body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  pageTitle: string = "Text Analyzer"
  appVersion: string;

  /**
   * Constructor
   * 
   * Set up version on start.
   */
  constructor() {
    this.appVersion = appVersion
  }
}