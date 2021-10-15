import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoggedinPage } from '../pages/loggedin/loggedin';
//import { AboutPage } from '../pages/about/about';

//export 
  const firebaseAuth = {  
    apiKey: "AIzaSyCRK13ipCkjrzARJ6SnAmRBpvAlJJfSB7M",
    authDomain: "socialapp-b1682.firebaseapp.com",
    databaseURL: "https://socialapp-b1682.firebaseio.com",
    projectId: "socialapp-b1682",
    storageBucket: "socialapp-b1682.appspot.com",
    messagingSenderId: "731840671009"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage, LoginPage, RegisterPage, LoggedinPage
    //, AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, LoginPage, RegisterPage, LoggedinPage
    //, AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
