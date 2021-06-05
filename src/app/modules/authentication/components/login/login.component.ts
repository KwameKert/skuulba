import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../service/auth.service';
import { User} from '../../auth';
import { ToastrService } from 'ngx-toastr';

import {FormBuilder, FormControl, Validators, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _authService: AuthService, private _toastr: ToastrService) { }

  public response: any;
  loginForm: FormGroup;
  isLoading: Boolean = false;


  ngOnInit() {

    this.loginForm = new FormGroup({
      userName : new FormControl('', [Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      password:  new FormControl('', Validators.required)
    })
  }

  loginUser(){
  
    this.isLoading = true;

    this._authService.getUserDetails(this.loginForm.value).subscribe(data => {
      this.response = data;
      
      if( this.response.data.length != 0 ){

        this._authService.setUserDetails(this.response.data);

        this._toastr.success("Welcome to Skuulba 🙂","",{
          timeOut:2000
        })

     
        this.router.navigate(['/student/dashboard']);
        this.isLoading = false;
        
      }else{
        this._toastr.info("Invalid credentials. 🥺","",{
          timeOut:2000
        })
      }
      
      this.isLoading = false;
          
     //  console.log(this._authService.isLoggedIn);
      
    }, error=>{
      console.warn('An error occured');
    })
   this.isLoading = false; 
  }

}
