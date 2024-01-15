import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../components/cart-component/cartmodal';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  removeItems(_productdata: product) {
    throw new Error('Method not implemented.');
  }
  removeItem(_productdata: product) {
    throw new Error('Method not implemented.');
  }
  public cartItemsList: any = [];
  public productsList =  new BehaviorSubject<any>([]);
  public search= new BehaviorSubject<string>("");
  constructor() { }
  getproducts(){
    return this.productsList.asObservable();
    
  }
  setproduct(product: any){
    this.cartItemsList.push(...product);
    this.productsList.next(product);

  }
  addtocart(product: any){
    console.log('Adding to cart:', product);
    this.cartItemsList.push(product);
    this.productsList.next(this.cartItemsList);
    this.getTotolprice();
    this.getTotolprice();
    console.log('Cart items:', this.cartItemsList);
  }
  getTotolprice():number{
    let grandTotal = 0;
    this.cartItemsList.map((_a:any) => {
     
    })
    return grandTotal
}
// removetocart(product: any){
//   this.cartItemsList.map((a:any,index:any) => {
//   if(product.id==a.id){
//     this.cartItemsList.splice(index,1);
//   }
//   })
//   this.productsList.next(this.cartItemsList);
// }

removetocart(product: any){
  this.cartItemsList.map((a:any,index:any) => {
    if(a && product.id == a.id){
      this.cartItemsList.splice(index,1);
    }
  })
  this.productsList.next(this.cartItemsList);
}
removeAllcart(){
  this.cartItemsList = [];
  this.productsList.next(this.cartItemsList);
}
}