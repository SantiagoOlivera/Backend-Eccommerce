import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  Validators} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  host:{
    class: 'app-forms'
  }
})

export class SignupComponent implements OnInit {
  nameFormControl = new FormControl('', [
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
  ]);

  constructor(
    private fb:FormBuilder, 
    public usersService: UsersService
  ) { }
 
  rta: String;
  
  public signupForm = this.fb.group({
    name:[""],
    lastname:[""],
    email:[""],
    user:[""],
    password:[""]
  })

  ngOnInit() {
  }

  signup(){
    //console.log(this.signupForm.value);    
    this.usersService.signup(this.signupForm.value).subscribe(rta => {
      console.log(rta);
    },
    error => {
      console.log(error);
    });

  }

}

/* @Component({
  selector: 'input-errors-example',
  templateUrl: 'input-errors-example.html',
  styleUrls: ['input-errors-example.css'],
})
export class InputErrorsExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
} */