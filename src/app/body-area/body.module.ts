import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { InputModule } from '../input-area/input.module';
import { ResultModule } from '../result-area/result.module';
import { RouterModule } from '@angular/router';


/**
 * Module for the app
 */
@NgModule({
  imports: [
    InputModule,
    ResultModule,
    RouterModule 
  ],

  declarations: [
    BodyComponent
  ],

  exports: [
    BodyComponent
  ],

  providers: []
})
export class BodyModule {}
