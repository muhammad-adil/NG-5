import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PostService } from '../post.service';
import { CommentsService } from '../comments.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [PostService, CommentsService]
})


export class BlogComponent {
  constructor(private postService: PostService, private router:Router) {}
  isOpen(data) {
    console.log(data)
  } 

  getCurrentPost(id){
    this.router.navigate(['blog/post', id]);
  }

  //   redirect() {
  //   this.router.navigate(['./SomewhereElse']);
  // }

}
