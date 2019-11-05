import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(data){

  }
  
  signup(data){
    let signupHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:3000/users/signup', {
      title: 'foo',
      body: data
    }, { 
         headers: signupHeaders 
       }
    );
  }

}
