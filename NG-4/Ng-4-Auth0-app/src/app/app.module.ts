import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import * as auth0 from 'auth0-js';

import { RouterModule, Routes } from "@angular/router";
import { AppRoutes } from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
