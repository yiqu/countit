import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdListModule } from '@angular/material';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { routes } from './about.routing';


@NgModule({
  imports: [
    MdListModule, 
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [
  ],

  declarations: [
    AboutComponent
  ],
  
  providers: [],
})
export class AboutModule {}
