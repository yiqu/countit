import { Component } from '@angular/core';


/**
 * Lazy loaded about component class.
 * 
 */
@Component({
  moduleId: module.id,
  selector: 'version',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor() {}
  
  // change log information array
  changelog: Array<Object> = [
    {
      version: '1.0.0',
      date: new Date('6/7/17'),
      changes: 'Created application.'
    },
    {
      version: '1.1.0',
      date: new Date('6/28/17'),
      changes: 'Added Angular Animation.'
    },
    {
      version: '1.2.0',
      date: new Date('7/28/17'),
      changes: 'Added extra logic for chip length.'
    },
    {
      version: '1.3.0',
      date: new Date('8/01/17'),
      changes: 'Added capability to remove',
      externalLink: "stop words.",
      linkUrl: "assets/stopwords.json"
    },
    {
      version: '1.3.2',
      date: new Date('8/22/17'),
      changes: 'Chores. Updated dependency versions.'
    },
    {
      version: '1.4.2',
      date: new Date('9/29/17'),
      changes: 'Chores. Updated dependency versions for Angular and Material'
    }
  ];
}
