import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from '../components/sign-up/datatypes';




@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient ){}
  userSignUp(data:signUp){
     return this.http.post('http://localhost:2000/users/create',data)
   }
 

}
