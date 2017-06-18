import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { WordService } from '../shared/word.service';

import {MdChipsModule} from '@angular/material';

/**
 * Module for displaying people and search results
 * SharedModule is imported which will bring in MaterialModule
 */
@NgModule({
  imports: [
    CommonModule,
    MdChipsModule
  ],

  declarations: [
    ResultComponent
  ],

  exports: [
    ResultComponent
  ],
  
  providers: [
    WordService
  ]
})
export class ResultModule {}
