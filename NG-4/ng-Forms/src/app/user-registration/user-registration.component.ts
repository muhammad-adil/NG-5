import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})


export class UserRegistrationComponent implements OnInit {

   constructor() { }

  onSubmit = function(user) {
    console.log(user);
  }

  //Array Of Interets
  interests = [
    {value: 'Angular-0', viewValue: 'Angular'},
    {value: 'React-1', viewValue: 'React'},
    {value: 'Aurelia-2', viewValue: 'Aurelia'},
    {value: 'Vue-3', viewValue: 'Vue'}
  ];

emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern( EMAIL_REGEX )] );  

   ngOnInit() {}

}
