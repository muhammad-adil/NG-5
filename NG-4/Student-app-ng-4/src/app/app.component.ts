import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { Student } from './student.model';
import { StudentService } from './student.service';
import { MainStudentTable } from './mainstudent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 providers: [ StudentService ]
})


@Injectable()
export class AppComponent {
  title = 'Angular 4 Student [CRUD] App';
  constructor( ){
  }

  ngOnInit() {
    //this.title = this._StudentService.someMethod();
    }
}
