import { Component, OnInit } from '@angular/core';
import  Student  from './students';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

  studentsList:Student[];

  constructor() {
    this.studentsList = [
        new Student("Adill" , 21 , false ),
        new Student("Ali" , 11 , false ) 
             ];
    
    console.log(this.studentsList);

}
  
  ngOnInit() { }

}