import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../auth';
import { environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl = environment.api_host;
  private loggedInStatus = localStorage.getItem("status");
  constructor(private _httpClient: HttpClient) { }

  getUserDetails(data: any ){
    return this._httpClient.post(`${this._baseUrl}/auth/`, data);
  }

  setUserDetails(authData: any){
    localStorage.setItem("userName", authData.userName);
    localStorage.setItem("role", authData.role);
    localStorage.setItem("status", "active" )
  }

  public get isLoggedIn(){
    return this.loggedInStatus;
  }
  
}
