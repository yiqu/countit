import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { MdButtonModule, MdTooltipModule } from '@angular/material';
import { WordService } from '../shared/word.service';


/**
 * Input area module
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
