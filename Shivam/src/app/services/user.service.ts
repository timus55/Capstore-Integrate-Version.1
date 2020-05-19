import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Injecting HttpClient service to make REST Api calls.
  // To perform CRUD operations with Http Verbs - GET, POST, PUT, DELETE
  constructor(private http: HttpClient) { }

  // endpoint or REST api URL
  baseUrl: string = "http://localhost:8083/customer/";

  changePassword(username, oldPassword, newPassword){
    return this.http.get(this.baseUrl + "changePassword/"+username+ "/" +oldPassword+ "/" +newPassword );
  }

}
