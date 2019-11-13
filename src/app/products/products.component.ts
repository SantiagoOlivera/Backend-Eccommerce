import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductsService ]

})
export class ProductsComponent implements OnInit {
  
  productForm;
  data = [];

  //el metodo constructor se ejecuta cuando se inicia la carga 
  //del componente
  constructor( public productsService: ProductsService, private router: Router) { 
    //mandar consulta para saber si esta logueado el usuario
    
    //if(err.status === 401 ){
      //this.router.navigateByUrl('/login');
    //}else{
      this.getProducts();
    //}
  }

  getProducts(){
    this.productsService.getProducts().subscribe(data => {
      console.log(data);
      this.data = data['data'];
    });
  }
  //ngInit se ejecuta cuando termina la carga del componente
  ngOnInit() {
  }

}
