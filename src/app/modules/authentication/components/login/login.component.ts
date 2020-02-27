import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../service/auth.service';
import { User} from '../../auth';

import {FormBuilder, FormControl, Validators, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _authService: AuthService) { }

  public response: any;
  loginForm: FormGroup;

  ngOnInit() {

    this.loginForm = new FormGroup({
      userName : new FormControl('', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      password:  new FormControl('', Validators.required)
    })
  }

  loginUser(){
  
    this._authService.getUserDetails(this.loginForm.value).subscribe(data => {
      this.response = data;
      console.log(`🙂 ${this.response.data}`);
      // this._authService.setUserDetails(data);
      // console.log(this._authService.isLoggedIn);
      
    }, error=>{
      console.warn('An error occured');
    })
   // this.router.navigate(['student/dashboard']);
  }

}
