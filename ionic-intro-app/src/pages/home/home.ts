import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  splash = true;
  secondPage = HomePage;


  @ViewChild('username') uname;
  @ViewChild('userpassword') password;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  // openPage(){
  //   this.navCtrl.push(AboutPage);    
  // }

  signIn(){
    //console.log(this.uname.value, this.password.value);
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
