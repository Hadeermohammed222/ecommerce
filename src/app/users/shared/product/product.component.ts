import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() item:any = {};
  @Output() data = new EventEmitter();
  addbutton:boolean = false;
  amount:number = 0;
isLoading: any;
loading: any;
  constructor() { }
  ngOnInit(): void {
  }
  
  addToCart(item:any){
     this.data.emit({item:this.item,quantity:this.amount});
  }

}
