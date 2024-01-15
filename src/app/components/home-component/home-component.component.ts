import { Component } from '@angular/core';
import { ApisService } from 'src/app/apis.service';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { CartService } from 'src/app/service/cart.service';
import {product} from '../cart-component/cartmodal'
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'shop';

  isCollapsed = true;
   products: any
  colors: any
  colorimages: any //imgcolor table images
  images: any
  productDetails: any
  prodColors: any //colors table images
  prodimages: any //image table images 
  prodImg:any //product table image
  productid:any
  
  
   searchKey:string="";
   zoom=true;

 
   
  //cart
  item: any;
  public productdata:any=[];
  id: any;
  showadd: boolean = true;
  showremove: boolean = false;
 product: any;



  constructor(private api:ApisService ,private auth:AuthServiceService, private cartservice:CartService) { }
  ngOnInit() {

    this.api.getProducts().subscribe((res: any) => {

      this.products = res.data;
      this.colors = res.colors;
      this.colorimages = res.imgcolor;
      this.images = res.images;


    })

    
   
 }

 
 
 
 
 
 
 
  getProduct(id: any) {
    this.prodImg=null;
    this.productid=id;
    this.api.getProduct(id).subscribe((res: any) => {
      this.productDetails = res.data;
      this.productDetails.map((product:any) => {
        if(product.extra_details){
          product.extra_details=JSON.parse(product.extra_details);
         }
       });
       this.productDetails.map((product:any) => {
        if(product.prod_details){
          product.prod_details=JSON.parse(product.prod_details);
       }
      });
      this.productDetails.map((product:any) => {
        if(product.size){
          product.size=product.size.split(",");
         }
       });

      this.prodColors = res.colors;
      this.colorimages=res.imgcolor;
      this.prodimages=res.images;
       console.log("product", this.productDetails);
     


    })
  }

  
  setImage(name:any){
    this.prodImg=name

  }


  getimages(colorid: any){
    let id=this.productid;
    this.api.getimages(colorid,id).subscribe((res:any)=>{
      this.prodImg = res.imgcolor[0]? res.imgcolor[0].img_url:null;
      console.log(res.colors);
      this.prodimages=res.imgcolor;

      console.log("colors",res.imgcolor);
     
      
    })

  }
  
  imageZoom(imgID:any, resultID:any) {
    this.zoom=true;
    var img:any, lens:any, result:any, cx:any, cy:any;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e:any) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
      if (x < 0) { x = 0; }
      if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
      if (y < 0) { y = 0; }
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e:any) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  zoomOut(){
    this.zoom=false;
  }


  //for cart
  addtoCart(productdata:product) {
    console.log('Adding to cart:', this.productdata)
    this.showadd=false;
    this.showremove=true;
    this.cartservice.addtocart(productdata)
  }

  removeItems(productdata:product) {
    this.showadd=true;
    this.showremove=false;
    this.cartservice.removeItems(productdata)

  }
}
