import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BaseUrl = 'https://localhost:44350/api';

  constructor(private http: HttpClient) { }

  CreateUser(data: any): Observable<any> { 
    return this.http.post<any>( 
      environment.url + "contact", 
      data
    ); 
  } 

  RegisterUser(data: any): Observable<boolean> { 
    return this.http.post<boolean>( 
      environment.url + "UserApi/registerUser", 
      JSON.stringify(data) 
    ); 
  } 

  ReadUser(data: any): Observable<any> { 
    return this.http.get<any>( 
      environment.url + "contact"
    ); 
  } 

  UpdateUser(data: any): Observable<boolean> { 
    return this.http.post<boolean>( 
      environment.url + "contact/updateUser", 
      data
    ); 
  } 

  ReadUserById(data: any): Observable<any> { 
    return this.http.get<any>( 
      environment.url + "contact/"+ parseInt(data.id)      
    ); 
  } 

  DeleteUser(data: any): Observable<any> { 
    return this.http.put<any>( 
      environment.url + "contact/"+ parseInt(data.id), 
      data
    ); 
  } 

  ChangePassword(data: any): Observable<boolean> { 
    return this.http.post<boolean>( 
      environment.url + "UserApi/changePassword", 
      JSON.stringify(data) 
    ); 
  }

  ReadUserProfile(data: any): Observable<boolean> { 
    return this.http.post<boolean>( 
      environment.url + "UserApi/readUserProfile", 
      JSON.stringify(data) 
    ); 
  } 

}
