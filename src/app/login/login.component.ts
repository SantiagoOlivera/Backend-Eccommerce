//creado mediante el comando ng generate component login
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators, FormControl, FormGroup} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Key } from 'protractor';
/* import { AuthenticationService } from '../authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; */


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor( 
    private fb:FormBuilder,
    public usersService: UsersService
    ) { 
    
  }
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      userOrEmail: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  login(){
      //console.log(this.loginForm.value);
      this.usersService.login(this.loginForm.value).subscribe(rta => {
        //console.log(rta);
        var data = rta['data'];
        localStorage.setItem("access-token", data.token);
        
      });
  }

  

}
