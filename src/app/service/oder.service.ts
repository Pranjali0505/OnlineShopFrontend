import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OderService {

  constructor(private http:HttpClient) { }
 
  getOrders(){
    return this.http.get('http://localhost:2000/order/getall');
  }

}
