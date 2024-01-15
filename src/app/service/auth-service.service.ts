import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  public search= new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

onLogin(data:any):Observable<any>{
  return this.http.post('http://localhost:2000/auth/login',data)
}
  
}
