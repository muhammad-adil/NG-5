import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    //get the id from the url
    let id = this.route.snapshot.params['id'];
    //make request on the basis of id to get user
    this.service.getUser(id)
      .subscribe(user => this.user = user);
      // console.log(this.user)
  }

}
