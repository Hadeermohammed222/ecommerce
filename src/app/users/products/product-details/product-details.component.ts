import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../servicves/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   id:any;
   item:any;
   loading:boolean = false;

  constructor(private router:ActivatedRoute,private _service:ProductService) {
  }
  
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id");
    this.getProduct();
  }
  
  getProduct(){
    this.loading = true;
    this._service.getProductById(this.id).subscribe((res:any)=>{
        this.item = res;
        this.loading = false;
    })
  }
}
