import { Component, OnInit, NgModule } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
/* import { MatFileUploadModule } from 'angular-material-fileupload'; */
import { FileUploader } from 'ng2-file-upload';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { analyzeAndValidateNgModules } from '@angular/compiler';


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
  public  URL = 'http://localhost:3000/fileupload/add';
  public uploader: FileUploader = new FileUploader({url: this.URL, itemAlias: 'image'});

  data = [];
  productForm: FormGroup;
  productFormItems: FormArray;
  newProducts: Array<Number> = [];
  uploaders: Array<FileUploader> = [];
  categories: JSON;



  defaultImage: null;


  panelOpenState = false;

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
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are 
    //able to deal with the server response.
    

    //Get default image
    this.getDefaultImage()
    
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
      images:      new FormArray([]),
      savePorcentage: new Number(0),
      
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
    this.uploaders.push( new FileUploader({url: this.URL, itemAlias: 'image'}));

    console.log(this.productForm.get('productFormItems'));
    
  }
  
  saveProduct(i){



    
   
    var imagesNames = new Array();  
    var cantImagesToUpload =  (this.productForm as any).get('productFormItems').controls[i].controls.images.length;

    //set porcentage of button bar progress according 
    var porcentageProgressByImage = ((100-10) / cantImagesToUpload);

    

   
    
    this.uploaders[i].uploadAll();
    this.uploaders[i].onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploaders[i].onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      this.loadButtonProgressBar(i,porcentageProgressByImage);
      //add to variable images names
      imagesNames.push(JSON.parse(response).data.filename);
      
      //si la cantidad de imagenes subidas es igual a la cantidad de images en el formlario del reporte
      if(imagesNames.length === cantImagesToUpload){
        console.log(imagesNames);
        
        //add images names to product form
        this.productForm.value.productFormItems[i].images = imagesNames;
        //console.log(this.productForm.value.productFormItems[i]);
        
        
        this.productsService.addProduct(this.productForm.value.productFormItems[i]).subscribe(rta => {
          var data = rta['data'];
          var message = rta['message'];
          //console.log(rta);
          
          //if status is success set 100% button bar progress
          switch(rta['status']){
            case 'success':
              this.loadButtonProgressBar(i,10);
            break;
            case 'error':
            break;
          }
        }); 
      
      }

      

    }
    /* this.uploader.uploadAll();
    
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      var image = JSON.parse(response);
      console.log(this.productForm.value.productFormItems[i]);
      //add image name to product data
      this.productForm.value.productFormItems[i].image = image.data.filename;
      
      this.productsService.addProduct(this.productForm.value.productFormItems[i]).subscribe(rta => {
        //console.log(rta);
        var data = rta['data'];
        var message = rta['message'];
        //console.log(data);
        console.log(rta);
        //console.log(data);
      }); 
    }*/
      
  
}

  deleteProduct(i){
    if((this.productForm as any).get('productFormItems').controls.length === 1){
      this.productForm.removeControl('productFormItems');
    }else{
      (this.productForm as any).get('productFormItems').removeAt(i);
    }
  }

  addImage(i){
      
      console.log((this.productForm as any).get('productFormItems').controls[i].controls.images);
      (this.productForm as any).get('productFormItems').controls[i].controls.images.push(
        new FormControl(),
      );
  }

  deleteImage(i , y){
    (this.productForm as any).get('productFormItems').controls[i].controls.images.removeAt(y);
    //console.log(document.querySelectorAll('.new_product_' + i + ' input[type="file"]' ));
    //return document.querySelectorAll('.new_product_' + i + ' input[type="file"]' );
  }
  
  deleteNullImages(i){
    
    var inputImages =  this.getProductImages(i);
    //verify null images
    var removeNullInputs = [];

    for(var x=0; x<inputImages.length; x++){

      console.log(inputImages[x]);
      console.log((inputImages[x] as any).value) ;
    
      if((inputImages[x] as any).value === ""){
            removeNullInputs.push(x);
            inputImages[x].remove();
       }
    }
    //remove form controlers
    console.log(removeNullInputs);
    var cont = 0;
    removeNullInputs.forEach(element => {
      //console.log(element);
      this.deleteImage(i, element-cont);
      cont++;
    });
  }

  getProductImages(i){
    return document.querySelectorAll('.new_product_' + i + ' input[type="file"]' );
  }
  
  onFileChanged(event){
    console.log(event);
  }

  //this method make preview images loaded in the product 
  previewImage(event, i,y){
    var reader = new FileReader();
    if(event.target.files.length > 0 ){
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        (this.productForm as any).get('productFormItems').controls[i].controls.images.controls[y].value = reader.result; 
      }
    }
  }

  //function to get the default Image in setted in the configuration
  getDefaultImage(){
    this.http.get('/assets/img/products-images/noimage.png', { responseType: 'blob' })
      .subscribe(blob => {
        const reader = new FileReader();
        const binaryString = reader.readAsDataURL(blob);
        reader.onload = (event: any) => {
          console.log('Image in Base64: ', event.target.result);
          this.defaultImage = event.target.result;
        };
        reader.onerror = (event: any) => {
          console.log("File could not be read: " + event.target.error.code);
          this.defaultImage = event.target.error.code;
        };

      });
  }


  
 
  //function to change porcentage button bar progress to save the product
  loadButtonProgressBar(i,porcentage){
    (this.productForm as any).get('productFormItems').controls[i].controls.savePorcentage.value += porcentage * 2;
  }
 
  
  
  
}