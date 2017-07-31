import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body-area/body.component';

const routes: Routes = [
  {
    path: 'analyze',
    component: BodyComponent
  },
  { path: '**', redirectTo: '/analyze', pathMatch: 'full' },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }