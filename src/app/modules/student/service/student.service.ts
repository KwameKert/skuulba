import { Injectable } from '@angular/core';
import { Student} from '../components/student';
import {HttpClient} from '@angular/common/http';
import { environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = environment.api_host;
  constructor(private _httpClient: HttpClient) { }

  public getStudent(id: number){
    //let url = `${this.baseUrl}/student/${id}`;
    return this._httpClient.get(`${this.baseUrl}/student/${id}`)
  }

  public createStudent(data: Student){
    return this._httpClient.post(`${this.baseUrl}/student/`,data);
  }

  public saveStudentPhysical(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentPhysical/`,data);
  }

  public saveStudentEducation(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentEducation/`,data);
  }

  public saveStudentPersonality(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentPersonality/`,data);
  }


  public saveStudentHealth(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentHealth/`,data);
  }

  public saveStudentHandicap(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentHandicap/`,data);
  }

  public createStudentParent(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentParent/`,data);
  }
}
