import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { StudentsComponent } from './students/students.component';

import { APP_ROUTES } from './routes';
import { ContactComponent } from './contact/contact.component';
import { StudentListComponent } from './student-list/student-list.component' ;

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FooterComponent,
    AboutComponent,
    StudentsComponent,
    ContactComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
