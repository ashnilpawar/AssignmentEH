import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  constructor(private http: HttpClient) { }

  Login(login: any): Observable<boolean> {
    return this.http.post<boolean>(
      environment.url + "validateUser",
      login
    );
  }

}