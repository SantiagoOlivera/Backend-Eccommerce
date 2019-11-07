import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  login(data){
    //let loginHeaders = new HttpHeaders();
    //loginHeaders.append('Access-Control-Allow-Origin' , 'http://localhost:3000');
    return this.http.post('http://localhost:3000/users/login', data );
  }

  signup(data: JSON){
    //console.log(data);
    let signupHeaders = new HttpHeaders();//.set('Content-Type', 'application/x-www-form-urlencoded');
    signupHeaders.append('Access-Control-Allow-Origin' , 'http://localhost:3000');
    return this.http.post('http://localhost:3000/users/signup', data, { headers: signupHeaders }
    );
  }

}
