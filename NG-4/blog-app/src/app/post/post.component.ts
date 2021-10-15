import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { CommentsService } from '../comments.service';
//import { BlogComponent } from '../../blog/blog.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [PostService, CommentsService]
})

export class PostComponent {

    comments: Array<any> = [];
    postId: string = '';
    posts: any;
    currentPost: any;
    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private commentsService: CommentsService
    ) {

        this.route.paramMap.subscribe(params => {
            let postId = params.get('id')
            this.postService.getPost(postId)
        });
    }

    ngOninit() {
        this.postService.getPost(this.route.snapshot.params.id)
    }

}

export interface Post {
    id: number;
    title: string;
    body: string;
}