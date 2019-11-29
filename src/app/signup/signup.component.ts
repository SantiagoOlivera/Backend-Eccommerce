import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  Validators, FormGroup, AbstractControl} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { LoginComponent } from '../login/login.component';

import { ValidatePassword } from '../_helpers/validate-password.validator';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  //add class to main class of the component
  host:{
    class: 'app-forms'
  }
})

export class SignupComponent implements OnInit {
  
  signupForm: FormGroup;
  rta: String;

  constructor(
    private fb:FormBuilder, 
    public usersService: UsersService
  ) {  }
 
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

  signup(){
    console.log(this.signupForm.value);
    //console.log(this.signupForm.value);    
    this.usersService.signup(this.signupForm.value).subscribe(rta => {
      console.log(rta);
    },
    error => {
      console.log(error);
    });

  }
  
}