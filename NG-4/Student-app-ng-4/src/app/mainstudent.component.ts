import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AppComponent } from './app.component';

import { StudentService } from './student.service';


@Component({
    selector : 'std-main-cmp',
    templateUrl : './mainstudenttable.html' ,
    styleUrls : ['./studentmaincomponent.css' ]
})

 
export class MainStudentTable{
    student = []; 
    constructor(public studentService: StudentService){ // created instance of StudentService
    // this.student = this.studentService.students;
    //console.log('this.student', this.student)  
    }
} 