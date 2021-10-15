import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material design 
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
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



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationReactiveFormComponent } from './user-registration-reactive-form/user-registration-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    UserRegistrationReactiveFormComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule, BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
