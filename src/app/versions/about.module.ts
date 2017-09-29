import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { routes } from './about.routing';


@NgModule({
  imports: [
    MatListModule, 
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    AboutComponent
  ],

  declarations: [
    AboutComponent
  ],
  
  providers: [],
})
export class AboutModule {}
