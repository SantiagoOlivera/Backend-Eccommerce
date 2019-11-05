import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }



  /* getProducts(){
      return['product 1', 'product 2', 'product 3'];
  } */

  getProducts(){
    // let header = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
    //let header = new HttpHeaders();
    //header.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    //return this.http.get('http://localhost:3000/products', { headers: header });
    return this.http.get('http://localhost:3000/products');
  }
}
