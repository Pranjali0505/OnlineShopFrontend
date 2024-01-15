import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { 
    this.getProducts()
    this.getmaster()
   

  }

  searchProduct(name:any){
    return this.http.get('http://localhost:2000/search/'+name)
  }


   getProducts():Observable<any>{
    return this.http.get('http://localhost:2000/get/getall')

  }

  getmaster():Observable<any>{
    return this.http.get('http://localhost:2000/get/getmaster')

  }


  getMain(id:any):Observable<any>{
    return this.http.get('http://localhost:2000/get/getmain/'+id)

  }


  getSubcat(id:any):Observable<any>{
    return this.http.get('http://localhost:2000/get/getsub/'+id)
  }


  getCat(id:any):Observable<any>{
    console.log(id);
    return this.http.get('http://localhost:2000/get/getcat/'+id)
  }



  
  getProduct(id:any):Observable<any>{
    console.log(id)
    return this.http.get('http://localhost:2000/get/getproduct/'+id)


  }
  
  getimages(colorid:any,Pid:any):Observable<any>{
    console.log(Pid,colorid);
    return this.http.post('http://localhost:2000/get/getcolorimages',{pid:Pid,colorid:colorid});
  }





  



 
}
