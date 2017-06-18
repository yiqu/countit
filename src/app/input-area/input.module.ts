import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdTooltipModule } from '@angular/material';

import { InputComponent } from './input.component';
import { WordService } from '../shared/word.service';

/**
 * Module for displaying people and search results
 * SharedModule is imported which will bring in MaterialModule
 */
@NgModule({
  imports: [
    CommonModule, // used for ngIf, ngFor
    FormsModule,  // used for 2-way binding [{foo}]
    MdButtonModule,
    MdTooltipModule
  ],

  declarations: [
    InputComponent
  ],

  exports: [
    InputComponent
  ],

  providers: [
    WordService
  ]
})
export class InputModule {}
