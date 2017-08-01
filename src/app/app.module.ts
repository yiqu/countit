import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyModule } from './body-area/body.module';
import { NotFoundModule } from './404/404.module';
import { VersionModule } from './versions/versions.module';

import 'hammerjs';


/**
 * Module class
 */
@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    AppRoutingModule,
    BodyModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NotFoundModule,
    VersionModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
