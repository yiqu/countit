import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { MdButtonModule, MdTooltipModule } from '@angular/material';
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

  ]
})
export class InputModule {}
