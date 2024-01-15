import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule,Routes } from '@angular/router';
import { HomeComponentComponent } from '../components/home-component/home-component.component';
import { CartComponentComponent } from '../components/cart-component/cart-component.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';


const routes: Routes = [
 
  {
    path:'home',
    component:HomeComponentComponent
  },
  {
    path:'order',
    component:OrdersComponent
  },
  {
    path:'cart',
    component:CartComponentComponent
  },
 {
    path:'login',
    component:LoginComponent
  }, 

  {
    path:'signup',
    component:SignUpComponent
  }, 
  {
    path:'**',
    component:HomeComponentComponent
  }
  

  

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
    
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
