import { Component, OnInit, NgModule } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  
  data = [];
  productForm: FormGroup;
  productFormItems: FormArray;
  newProducts: Array<Number> = [];

  //el metodo constructor se ejecuta cuando se inicia la carga 
  //del componente
  constructor( private  productsService: ProductsService, 
               private router: Router, 
               private fb: FormBuilder,
               private http: HttpClient,
  ) { 
      //this.getProducts();
  }

  //ngInit se ejecuta cuando termina la carga del componente
  ngOnInit() {
    this.productForm  =  this.fb.group({});
  }

  getProducts(){
    this.productsService.getProducts().subscribe(data => {
      console.log(data);
      this.data = data['data'];
    });
  }

  createProductFormItem(): FormGroup {
    return this.fb.group({
      title:       new FormControl('', Validators.required),
      sku:         new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price:       new FormControl('', Validators.required),
      image:[""],
    });
  }

  addProduct(): void {
    //verificar si tiene controles el asociados 
    if(!Object.keys(this.productForm.controls).length){
      //add first control new product form
      this.productForm.addControl('productFormItems', this.fb.array([ this.createProductFormItem() ]) );
    }else{
      //console.log(this.productForm.controls);
      //console.log(this.productForm.controls.productFormItems.controls.length);
      this.productFormItems = this.productForm.get('productFormItems') as FormArray;
      this.productFormItems.push(this.createProductFormItem());
    }  
  }
  
  saveProduct(i){
    console.log(i);
    console.log(this.productForm.value.productFormItems[i]);
  }
  

  onFileSelected(event, productForm: Number) {
    console.log(this.productFormItems);
    console.log(event);
    
    var selectedFile = <File>event.target.files[0]; */
    
   const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    } 
 }

  /* uploadFile(){
    const fd = new FormData();
    fd.append('image');
    this.http.post('http://localhost:4200/');
  } */

  
  
}
