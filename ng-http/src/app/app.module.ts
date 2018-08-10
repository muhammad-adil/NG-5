import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

// Services
import { UserService } from './shared/services/user.service';

// Routing
import { routing } from './app.routing';

// Components
import { AppComponent } from './app.component';

import { UsersComponent } from './users/users.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserSingleComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, routing,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
