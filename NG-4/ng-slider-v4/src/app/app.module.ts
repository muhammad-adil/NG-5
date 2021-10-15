import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule, HttpHandler } from '@angular/common/http';

//Services
import { SliderService } from './slider.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
