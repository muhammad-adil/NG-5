import { Component, OnInit } from '@angular/core';

import { StudentsComponent } from "../students/students.component";
import { StudentListComponent } from "../student-list/student-list.component";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
