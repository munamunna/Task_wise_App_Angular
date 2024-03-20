
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient) { }
  CreateUser(data:any){
    return this.http.post("https://munamariyam.pythonanywhere.com/user_authentication/users/",data)
  }
  login(userData:any){
    return this.http.post("https://munamariyam.pythonanywhere.com/user_authentication/login/",userData)
  }
}
