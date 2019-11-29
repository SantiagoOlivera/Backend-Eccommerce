import { Component, OnInit, NgModule } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
/* import { MatFileUploadModule } from 'angular-material-fileupload'; */

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductsService ],
  host:{
    class: 'app-forms'
  }

})
/* @NgModule({
  imports: [MatExpansionModule]
}) */
export class ProductsComponent implements OnInit {
  fileUploadInputFor;
  productForm;
  data = [];
  newProducts: Array<Number> = [];/* Array<MatExpansionModule> = []; */


  //el metodo constructor se ejecuta cuando se inicia la carga 
  //del componente
  constructor( public productsService: ProductsService, private router: Router) { 
          this.getProducts();
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

  addProduct(){
    //console.log(this.newProducts);
    this.newProducts.push(new Number());
    console.log(this.newProducts);
    /* this.newProducts = this.newProducts + '<mat-accordion><mat-expansion-panel><mat-expansion-panel-header><mat-panel-title>{{ products.name }}</mat-panel-title><mat-panel-description>Type your name and age</mat-panel-description></mat-expansion-panel-header><mat-form-field><input matInput placeholder="First name"></mat-form-field><mat-form-field><input matInput placeholder="Age"></mat-form-field></mat-expansion-panel></mat-accordion>'; */
  }
}
