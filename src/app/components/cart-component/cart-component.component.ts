import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit{

  public product:any = [];
  public productdata:any=[];
  
  public grandTotal !: number;
  constructor(private cartService:CartService){}

  ngOnInit(): void {
  this.cartService.getproducts().subscribe(res=>{
    this.product = res;
    this.grandTotal = this.cartService.getTotolprice();
  })
  
}
removeItem(item:any){
  this.cartService.removetocart(item);
  
}
emptyCart(){
  this.cartService.removeAllcart();
}

  


}
