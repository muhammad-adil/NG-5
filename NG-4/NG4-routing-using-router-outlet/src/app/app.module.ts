import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Angular Material
import 'hammerjs';

import { FlexLayoutModule } from '@angular/flex-layout'; //FlexLayout for angular material
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

// Routng
import { HttpClientModule, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { App_Routes } from "./routes";

import { SpeakersService, Speaker } from './speakers/shared';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { BioComponent } from './speakers/bio/bio.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpeakersComponent,
    BioComponent,
    SpeakersListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    RouterModule.forRoot(App_Routes)
  ],
  providers: [SpeakersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
