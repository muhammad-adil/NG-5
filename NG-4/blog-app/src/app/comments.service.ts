import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

    comments_URL = "https://jsonplaceholder.typicode.com/comments?";
    endpoint = "_start=0&_end=5"
    commentID = "id="
    allComments;
    comment;

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(this.comments_URL)
            .map(response => response.json());
    }

    getCommentsByPostId(id) {
        return this.http.get(this.comments_URL + '?postId=' + id)
            .map(response => response.json());
    }
}
