import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';

/**
 * Module for displaying people and search results
 * SharedModule is imported which will bring in MaterialModule
 */
@NgModule({
  imports: [

  ],

  declarations: [
    ResultComponent
  ],

  exports: [
    ResultComponent
  ],
  
  providers: [

  ]
})
export class ResultModule {}
