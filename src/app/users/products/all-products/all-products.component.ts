import { Component, OnInit } from '@angular/core';
import { ProductService } from '../servicves/product.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any[]=[];
  categories:any=[];
  isloading:boolean= false;
  cartProducts:any[]=[];
  constructor(private ProductService:ProductService) 
  {
    this.cartProducts = [];
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
 }
  getProducts(){
    this.isloading = true;
    this.ProductService.getAllProduct().subscribe((res:any)=>{
      this.products = res;
      console.log(this.products);
      this.isloading = false;
    });
  }
  getCategories(){
    this.isloading = true;
    this.ProductService.getAllCategories().subscribe((res:any)=>{
      this.categories = res;
      this.isloading = false;
    })
  }
  
  filterCategory(event:any){
    let value = event.target.value;
    console.log(value);
    if(value == 'All'){
      this.getProducts();
    }
    else{
      this.isloading = true;
      this.getProductByaCategory(value);
    }
   }
  getProductByaCategory(keyword:any){
    this.ProductService.getProductsByCategory(keyword).subscribe((res:any)=>{
      this.products = res;
      this.isloading= false;
    });
  }
  addToCart(event:any){
    if("cart" in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
        let exit = this.cartProducts.find(item => item.item.id == event.item.id);
      if(exit){
        alert("Product is already is your Cart");
      }
      else{
        this.cartProducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProducts));
      }
    }
    else{
      this.cartProducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    }
  }
}