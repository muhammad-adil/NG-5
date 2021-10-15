import { Component, OnInit } from '@angular/core';

export default class Student {
    
  name:string;
  age:number;
  hide:boolean;

  constructor(name:string, age:number, hide:boolean){
    this.name = name;
    this.age = age;
    this.hide = true;
  }
  
  toggle(){
    this.hide = !this.hide;
  }
}