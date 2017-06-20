import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result.component';
import { WordService } from '../shared/word.service';

import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdChipsModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';

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
    MdTooltipModule
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
