import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {
    email: string ;
    username : string ;

  constructor( private afAuth: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
  
      this.email = afAuth.auth.currentUser.email;
      this.username = afAuth.auth.currentUser.displayName;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

}
