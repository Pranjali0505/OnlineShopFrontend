import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { signUp } from './datatypes';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signUP: any;

 
constructor(private user:UserServiceService, private router:Router){}
ngOnInit(): void {}
userSignup(data:signUp):void{
   this.user.userSignUp(data).subscribe((result: any)=>{
    if(result){
      this.router.navigate(['home']);
    }
  
  });
}
 

 
}
