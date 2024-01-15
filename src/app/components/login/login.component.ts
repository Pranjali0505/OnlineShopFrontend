import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/apis.service';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  loginObj :any ={
    Email:'',
    Pass:''
  }


  constructor(private api:ApisService,private auth:AuthServiceService,private router:Router,private http:HttpClient){}

  
  onlogin(){
     this.auth.onLogin(this.loginObj).subscribe((res:any)=>{
      console.log('res',res)
      localStorage.setItem('token',res.token)
      this.router.navigateByUrl('/cart')
    })
  }
  
  


}
