import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatTooltipModule,
  MatSlideToggleModule } from '@angular/material';
import { ResultComponent } from './result.component';
import { WordService } from '../shared/word.service';


/**
 * Result area module
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatSlideToggleModule
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
