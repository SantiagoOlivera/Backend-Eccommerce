import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


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
