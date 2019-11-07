import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements HttpInterceptor {
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>> {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient) { }



  /* getProducts(){
      return['product 1', 'product 2', 'product 3'];
  } */

  getProducts(){
    var token = localStorage.getItem('access-token');
    let productsHeaders = new HttpHeaders();
    if(token){
      productsHeaders.set('x-access-token', token);
    }
    //.set('Content-type', 'application/x-www-form-urlencoded');
    //let header = new HttpHeaders();
    //header.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    //return this.http.get('http://localhost:3000/products', { headers: header });
    return this.http.get('http://localhost:3000/products', { headers: productsHeaders }
    
    );
  }
}
