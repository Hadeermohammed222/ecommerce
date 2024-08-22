import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router,Params} from '@angular/router';
import { AdmainService } from '../admain.service';
import { ProductService } from 'src/app/users/products/servicves/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  [x: string]: any;
  isloading:boolean = false;
  public productId!:any;
  base64:any;
  products:any[]=[];
  categories:any=[];
  updateform:FormGroup | any; 
  constructor(private formbuilder:FormBuilder,
              private router:Router,
              private activatedroute:ActivatedRoute,
              private _admain:AdmainService
            )
  { }

  ngOnInit(): void {
    this.updateform = this.formbuilder.group({
      image:['',Validators.required],
      title:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
    })
    this.activatedroute.params.subscribe((param:Params)=>{
      this.productId = param["id"];
      
    })
    this._admain.fetchdata(this.productId).subscribe((res:any)=>{
      this.productId = res;
    })
  }
  getImagePath(event:any)
  {
    const product = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(product);
    reader.onload = ()=>{
        this.base64 = reader.result;
        // this.updateform.get('image')?.setValue("");
        this.productId.image = this.base64;
    }
  }
  update(){
    this._admain.updateProduct(this.productId,this.productId.id).subscribe((res)=>{
          alert("Data Updated Successfully!!");
    })
  }
  // filterCategory(event:any){
  //   let value = event.target.value;
  //   console.log(value);
  //   if(value == 'All'){
  //     // this.getProducts();
  //   }
  //   else{
  //     this.isloading = true;
  //     this.getProductByaCategory(value);
  //   }
  //  }
  // getProductByaCategory(keyword:any){
  //   console.log(keyword.target.value);
  //  this.updateform.get('category')?.setValue(keyword.target.value);  
  // }
  // getProducts(){
  //   this.isloading = true;
  //   this.ProductService.getAllProduct().subscribe((res:any)=>{
  //     this.products = res;
  //     this.isloading = false;
  //   });
  // }
  // getCategories(){
  //   this.isloading = true;
  //   this.ProductService.getAllCategories().subscribe((res:any)=>{
  //     this.categories = res;
  //     this.isloading = false;
  //   })
  // }
  // submitcontact(){
  //   if(this.contactform.valid){
  //     this._api.addContact(this.contactform.value).subscribe((res:contact)=>{
  //       this.contactform.reset();
  //       this.router.navigate(["/contactList"]);
  //     })
  //   }
  // }
}


