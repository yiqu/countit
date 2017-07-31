import { NgModule } from '@angular/core';
import { InputModule } from '../input-area/input.module';
import { ResultModule } from '../result-area/result.module';
import { BodyComponent } from './body.component';

/**
 * Module class
 */
@NgModule({
  imports: [
    InputModule,
    ResultModule
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
