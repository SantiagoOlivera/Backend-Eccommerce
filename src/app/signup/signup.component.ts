import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators} from '@angular/forms';
import { UsersService } from '../services/users.service';

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
    console.log(this.signupForm.value);

    
    //this.usersService.signup(data).subscribe(data => {
      //console.log(data);
      //this.data = data['data'];
    //});

  }
}
