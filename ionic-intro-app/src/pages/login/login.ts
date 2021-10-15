import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') name;
  @ViewChild('userpassword') password;

  constructor(private alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser(){
    this.afAuth.auth.signInWithEmailAndPassword(this.name.value, this.password.value)    
    .then(data => {
      console.log('got data', this.afAuth.auth.currentUser);
      //user logged in
      this.alert('Success! you\'re logged in');
      this.navCtrl.setRoot( LoggedinPage );
    })
    .catch( error => {
      console.log('got an error' , error );
      this.alert(error.message);
    });
    console.log( this.name.value , this.password.value );
  }
}
