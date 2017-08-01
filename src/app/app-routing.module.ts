import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body-area/body.component';
import { NotFoundComponent } from './404/404.component';

const routes: Routes = [
  {
    path: 'analyze',
    component: BodyComponent
  },
  { path: '', redirectTo: '/analyze', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent
  }
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