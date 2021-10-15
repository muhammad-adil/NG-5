import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    URL = "https://jsonplaceholder.typicode.com/posts?";
    endpoint = "_start=0&_end=10"
    postID = "id="
    allPost;
    post;

    constructor(private http: Http) {
        this.getAllPost()
    }

    getAllPost() {
            return this.http.get(`${this.URL} + ${this.endpoint}`).subscribe(post => {
            this.allPost = post.json();
        }); 
    }

    getPost(id) {
        return this.http.get(this.URL + this.postID + id).subscribe(post => {
            this.post = post.json();
        });
    }
}
