import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private usersUrl:String = 'https://reqres.in/api/users';
  constructor( private http: HttpClient) { }

  /**
   * get all users
   */
   getUsers():Observable<User[]> { 
    return this.http.get(`${this.usersUrl}`)
    //don't need to map here
    // .map(res = res.json().data)
      .catch(this.handleError) 
        // {return Observable.throw(err || 'server Error')}

      // .subscribe(
      //   // res => this.users = res
      //    data => { 
      //     console.log(data);
      //     this.users = data as any; 
      // })
  
      //get in Promise way
      // this.http.get('https://reqres.in/api/users')
      //.toPromise()
      //.then(data => {
      //   console.log(data);
      // });
    }
  
    //get a single user
    getUser(id:number): Observable<User>{
      console.log(id, 'id');
      console.log(`${this.usersUrl}/${id}`)
      return this.http.get(`${this.usersUrl}/${id}`)
        .catch(this.handleError); 
    }


  //create a user
  //update a user
  //delete a user

  private handleError(err){
    let errMessage: String;
    if (err instanceof HttpResponse){
      // let body = err.json() || '';
      let body = err.body() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText} || '' ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }
    return Observable.throw(errMessage);
  }
}
