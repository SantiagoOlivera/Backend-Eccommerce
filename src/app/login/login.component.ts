//creado mediante el comando ng generate component login
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators} from '@angular/forms';
/* import { AuthenticationService } from '../authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; */


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( 
    private fb:FormBuilder) { 
    
  }

  public loginForm = this.fb.group({
    userOrEmail:[""],
    password:[""]
  })

  ngOnInit() {
  }

  login(){
      console.log(this.loginForm.value);
  }

}
