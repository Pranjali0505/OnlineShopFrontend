import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../service/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  masterCategory:any
  maincategory:any
  subCategory:any
  Category:any
  products:any

 

  public searchTerm: string=" ";

constructor(private api:ApisService , private auth:AuthServiceService, private router:Router, private http:HttpClient){}

  
  ngOnInit(){
    
    this.api.getmaster().subscribe((res:any)=>{
     this.masterCategory=res.data;
      console.log(this.masterCategory);




     
})

}



 


search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.auth.search.next(this.searchTerm);
}



getMasterCategory(){
  console.log();
  this.api.getmaster().subscribe((res:any)=>{
   this.masterCategory=res.data;
    console.log(this.masterCategory);
})

}
  


getMainCategory(id:any){
    console.log(id);
    this.api.getMain(id).subscribe((res:any)=>{
     this.maincategory=res.data;
      console.log(this.maincategory);
  })
  
  }
  
  getSubCategory(id:any){
    console.log(id);
    this.api.getSubcat(id).subscribe((res:any)=>{
      this.subCategory=res.data;
      console.log(this.subCategory);
    })
  }

  getCategory(id:any){
    console.log(id);
    this.api.getCat(id).subscribe((res:any)=>{
     this.Category=res.data;
      console.log(this.Category);
  })

}

getProducts(id:any){
  console.log(id)
  this.api.getProduct(id).subscribe((res:any)=>{
    this.products=res.data;
     console.log(this.products);
 })

 
}







}
