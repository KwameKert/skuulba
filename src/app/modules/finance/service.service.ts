import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private baseUrl = environment.api_host;
  constructor(private _httpClient: HttpClient) { }



  public payDailyFees(data){
    return this._httpClient.post(`${this.baseUrl}/finance/dailyFee/`, data);
  }

  public paySchoolFees(data){
    return this._httpClient.post(`${this.baseUrl}/finance/schoolFee/`, data);
  }

  public listDailyFees(){
    return this._httpClient.get(`${this.baseUrl}/finance/dailyFee/`)
  }

  public listSchoolFees(){
    return this._httpClient.get(`${this.baseUrl}/finance/schoolFee/`)
  }

  public searchFinanceByParam(data: any){
    return this._httpClient.post(`${this.baseUrl}/finance/schoolFee/search/`,data)
  }

  public saveInvoice(data: any){
    return this._httpClient.post(`${this.baseUrl}/finance/invoice/`,data)
  }

  public getStudentDailyFees(id: Number){
    return this._httpClient.get(`${this.baseUrl}/finance/dailyFee/student/${id}`)
  }

  public getStudentSchoolFees(id: Number){
    return this._httpClient.get(`${this.baseUrl}/finance/schoolFee/student/${id}`)
  }


}
