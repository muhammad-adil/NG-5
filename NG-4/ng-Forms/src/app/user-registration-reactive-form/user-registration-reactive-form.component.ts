import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-registration-reactive-form',
  templateUrl: './user-registration-reactive-form.component.html',
  styleUrls: ['./user-registration-reactive-form.component.css']
})
export class UserRegistrationReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Array Of Interets
  interests = [
    {value: 'Angular-0', viewValue: 'Angular'},
    {value: 'React-1', viewValue: 'React'},
    {value: 'Aurelia-2', viewValue: 'Aurelia'},
    {value: 'Vue-3', viewValue: 'Vue'}
  ];


}
