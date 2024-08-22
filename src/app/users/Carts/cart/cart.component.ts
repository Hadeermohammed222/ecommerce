import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:any[]=[];
  total:number=0;
  success:boolean = false;
  constructor(private cartService:ServicesService) { }

  ngOnInit(): void {
    this.getCartProduct();
  }
  getCartProduct(){
  if("cart" in localStorage){
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
  }
  this.addCartTotal();
}
  addAmount(index:number){
      this.cartProducts[index].quantity++;
      this.addCartTotal();
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }
  minusAmount(index:number){
    this.cartProducts[index].quantity--;
    this.addCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }
  detectChange(){
    this.addCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }
  deleteProduct(index:number){
    this.cartProducts.splice(index,1);
    this.addCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }
  clearCart(){
    this.cartProducts = [];
    this.addCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }
  addCartTotal()
  {
    this.total = 0;
     for(let x in this.cartProducts){
        this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
     }
   
  }
  addCart(){
    let products = this.cartProducts.map(item=>{
      return {ProductId:item.item.id,quantity:item.quantity}
    });

    let Model = {
      userId:5,
      data:new Date(),
      products:products
    }
     this.cartService.createNewCart(Model).subscribe(()=>{
        this.success = true;
     })

  }
}

