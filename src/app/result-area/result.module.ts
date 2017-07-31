import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result.component';
import { WordService } from '../shared/word.service';

import { MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdTooltipModule,
  MdSlideToggleModule } from '@angular/material';

/**
 * Module class
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdTooltipModule,
    MdSlideToggleModule
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
