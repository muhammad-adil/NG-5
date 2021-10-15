import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('useremail') userEmail;
  @ViewChild('userpassword') password;

  constructor( private alertCtrl: AlertController , private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Success',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.userEmail.value, this.password.value)    
    .then(data => {
      console.log('got data', data);

      //user Regidtered
      this.alert('Success! you\'re logged in');
      //this.navCtrl.setRoot( LoggedinPage );

    })
    .catch( error => {
      console.log('got an error' , error );
      this.alert(error.message);
    });
    console.log(this.userEmail.value, this.password.value);
  }

}
