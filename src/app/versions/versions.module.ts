import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule } from '@angular/material';
import { VersionComponent } from './version.component';

@NgModule({
  imports: [
    MdListModule, 
    CommonModule
  ],

  exports: [
    VersionComponent
  ],

  declarations: [
    VersionComponent
  ],
  
  providers: [],
})
export class VersionModule {}
