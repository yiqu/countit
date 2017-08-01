import { Component, OnInit } from '@angular/core';
// App version
const { version: appVersion } = require('../../../package.json')

@Component({
  moduleId: module.id,
  selector: 'body-component',
  templateUrl: 'body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  pageTitle: string = "Text Analyzer"
  appVersion: string;

  constructor() {
    this.appVersion = appVersion
  }
}