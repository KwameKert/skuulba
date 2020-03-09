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
}
