import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Control } from './model/control';
import { User } from './model/user';
import { Users } from './model/users';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) {
   }

  url = "http://localhost:3000";

  getUser(email:string){
    console.log('API URL:', this.url + '/users'); 
    const apiUrlWithParams = `${this.url}/users?email=${encodeURIComponent(email)}`;
    let params = new HttpParams();
    //params = params.append('param1', email);
    //return this.http.get<Users>(this.url+'users', { params })
    return this.http.get<Users>(apiUrlWithParams);
  }

  getActiveFlag(){
    return this.http.get<Users>(this.url)
  }
}
