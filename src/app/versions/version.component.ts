import { Component } from '@angular/core';


/**
 * Version component class.
 * 
 */
@Component({
  moduleId: module.id,
  selector: 'version',
  templateUrl: 'version.component.html',
  styleUrls: ['./version.component.css'],
})
export class VersionComponent {
  constructor() {}
  
  // change log information array
  changelog: Array<Object> = [
    {
      version: '1.0.0',
      date: new Date('7/01/17'),
      changes: 'Created application'
    },
    {
      version: '1.1.0',
      date: new Date('7/15/16'),
      changes: 'Look and feel update'
    },
    {
      version: '1.2.0',
      date: new Date('7/20/16'),
      changes: 'Look and feel update'
    },
    {
      version: '1.3.0',
      date: new Date('8/01/17'),
      changes: 'Added capability to remove',
      externalLink: "stop words",
      linkUrl: "assets/stopwords.json"
    }
  ];
}
