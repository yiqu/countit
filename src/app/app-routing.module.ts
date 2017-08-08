import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body-area/body.component';
import { NotFoundComponent } from './404/404.component';


/**
 * Routing for app.
 * For re-direct:
 * { path: '', redirectTo: '/analyze', pathMatch: 'full' },
 * 
 */
const routes: Routes = [
  {
    path: '',
    component: BodyComponent
  },
  {
    path: 'about', // Lazy loaded
    loadChildren: './versions/about.module#AboutModule'
  },
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
