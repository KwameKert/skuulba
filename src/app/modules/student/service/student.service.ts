import { Injectable } from '@angular/core';
import { Student} from '../components/student';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = environment.api_host;
  private clientId: string = '1520a1f06e23eb4';
  private url: string = 'https://api.imgur.com/3/image';
  constructor(private _httpClient: HttpClient) { }

  public getStudent(id: number){
    //let url = `${this.baseUrl}/student/${id}`;
    return this._httpClient.get(`${this.baseUrl}/student/${id}`)
  }


  public uploadImage(data: any){
    let header = new HttpHeaders({
      "authorization": 'Client-ID '+this.clientId
    });
    return this._httpClient.post(this.url, data, {headers:header})
  }

  public createStudent(data: Student){
    return this._httpClient.post(`${this.baseUrl}/student/`,data);
  }


  public updateStudent(data: any){
    return this._httpClient.put(`${this.baseUrl}/student/`,data);
  }

  public updateStudentParent(data: any){
    return this._httpClient.put(`${this.baseUrl}/studentParent/`,data);
  }

  public saveStudentPhysical(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentPhysical/`,data);
  }

  public deleteStudentPhysical(id: Number){
    return this._httpClient.delete(`${this.baseUrl}/studentPhysical/${id}`);
  }

  public deleteStudentEducation(id: Number){
    return this._httpClient.delete(`${this.baseUrl}/studentEducation/${id}`);
  }

  public deleteStudentHandicap(id: Number){
    return this._httpClient.delete(`${this.baseUrl}/studentHandicap/${id}`);
  }

  public searchStudent(data: any){
    return this._httpClient.post(`${this.baseUrl}/student/search`, data);
  }


  public deleteStudentAward(id: Number){
    return this._httpClient.delete(`${this.baseUrl}/studentAward/${id}`);
  }

  public deleteStudentTalent(id: Number){
    return this._httpClient.delete(`${this.baseUrl}/studentTalent/${id}`);
  }

  public deleteStudentPersonality(id: Number){
    return this._httpClient.delete(`${this.baseUrl}/studentPersonality/${id}`);
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


  public saveStudentTalent(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentTalent/`,data);
  }
  public saveStudentAward(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentAward/`,data);
  }


  public listStudents(){
    return this._httpClient.get(`${this.baseUrl}/student/`);
  }

  public getStudentDetails(id: any){
    return this._httpClient.get(`${this.baseUrl}/student/studentDetails/${id}`)
  }

  public deleteStudent(id: any){
    return this._httpClient.get(`${this.baseUrl}/student/delete/${id}`)
  }

  public getClassStudents(data: any){
    return this._httpClient.post(`${this.baseUrl}/student/class/`,data)
  }

  public createStudentParent(data: any){
    return this._httpClient.post(`${this.baseUrl}/studentParent/`,data);
  }

  public takeAttendance(data: any){
    return this._httpClient.post(`${this.baseUrl}/student/attendance/`,data);
  }

  public searchStudentByParam(data: any){
    return this._httpClient.post(`${this.baseUrl}/student/paramsearch/`, data);
  }
}
