import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/users/products/servicves/product.service';
import { AdmainService } from '../admain.service';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  products:any[]=[];
  categories:any=[];
  isloading:boolean= false;
  cartProducts:any[]=[];
  base64:any;
  imageSrc:any;
  form!:FormGroup
  constructor(
              private ProductService:ProductService,
              private AdmainService:AdmainService,
              private build:FormBuilder,
              private adminService:AdmainService
            ) 
  {
    this.cartProducts = [];
  }

  ngOnInit(): void {
    this.form = this.build.group({
      title:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      image:['',Validators.required],
      category:['',Validators.required]
    })
    this.getProducts();
    this.getCategories();
 }
  getProducts(){
    this.isloading = true;
    this.ProductService.getAllProduct().subscribe((res:any)=>{
      this.products = res;
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
    console.log(keyword)
   this.form.get('category')?.setValue(keyword);  
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result;
        console.log(this.imageSrc)
      };
      reader.readAsDataURL(file);
    }
  }
  addProduct(){
    const newProduct = {
      title: this.form.get('title')?.value,
      price: this.form.get('price')?.value,
      description: this.form.get('description')?.value,
      image: this.imageSrc,
      category: this.form.get('category')?.value
    };

    this.isloading = true;

    this.AdmainService.setProduct(newProduct).subscribe((res: any) => {
      this.products.push(res);
      this.isloading = false;
      this.form.reset(); 
      this.imageSrc = null; 
    }, (error: any) => {
      
      this.isloading = false;
    });
  }

  deleteProduct(id:any){
    this.isloading = true;
    this.AdmainService.deleteProduct(id).subscribe(
      () => {
        alert("product deleted successfully!!");
        this.products = this.products.filter(product => product.id !== id);
        this.isloading = false;
      },
      (error: any) => {
        console.error('Error deleting product:', error);
        this.isloading = false;
      }
    ); 
  }
  
}