import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  Validators, FormGroup, AbstractControl} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { LoginComponent } from '../login/login.component';

import { ValidatePassword } from '../_helpers/validate-password.validator';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  host:{
    class: 'app-forms'
  }
})

export class SignupComponent implements OnInit {
  
  

  /* nameFormControl = new FormControl('', [
    Validators.required
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required
  ]);
  usernameFormControl = new FormControl('', [
    Validators.required
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]); */

  signupForm: FormGroup;

  constructor(
    private fb:FormBuilder, 
    public usersService: UsersService
  ) {  }
 
  rta: String;

  

  /* public signupForm = this.fb.group({
    name:[""],
    lastname:[""],
    email:[""],
    user:[""],
    password:[""]
  }) */

  ngOnInit() {

    this.signupForm = this.fb.group({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },{
      validator: ValidatePassword('password', 'confirmPassword')
    });

    
  }


  
}