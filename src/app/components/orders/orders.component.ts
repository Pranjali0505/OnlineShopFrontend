import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/apis.service';
import { OderService } from 'src/app/service/oder.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders:any
  constructor(private api:ApisService ,private router:Router,private order:OderService){}
  getAllOrders(){
    console.log();
    this.order.getOrders().subscribe((res:any)=>{
     this.orders=res.data;
      console.log(this.orders);
  })
}


}
