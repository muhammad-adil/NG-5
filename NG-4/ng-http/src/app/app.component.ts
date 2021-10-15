import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];

  constructor( private service: UserService){}
  ngOnInit(){ 
    this.service.getUsers()
      .subscribe( users => this.users = users as any, 
                  err => { console.log(err) }
      );
  }

}