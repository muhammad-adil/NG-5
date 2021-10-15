import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { MainStudentTable } from './mainstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    MainStudentTable
  ],
  imports: [
    BrowserModule
  ],
  providers: [ StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
