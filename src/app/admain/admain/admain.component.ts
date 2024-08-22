import { Component, OnInit } from '@angular/core';
import { AdmainService } from '../admain.service';
import { FormBuilder, FormControl,  FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-admain',
  templateUrl: './admain.component.html',
  styleUrls: ['./admain.component.css']
})
export class AdmainComponent implements OnInit {
   carts:any[] = [];
   products:any[]=[];
   total:any = 0;
   details:any;
   form!:FormGroup 
  constructor(private admain:AdmainService,private build:FormBuilder) { }
  ngOnInit(): void {
    this.form = this.build.group({
      start:[''],
      end:['']
    });
     
    this.getAllCarts();
  }
  getAllCarts(){
    this.admain.getAllCarts().subscribe((res:any)=>{
       this.carts = res
    })
  }
  applyFilter(){
    let data = this.form.value;
    this.admain.getAllCarts(data).subscribe((res:any)=>{
        this.carts = res;
        alert("data is filter yet");
    })
  }
   deleteCart(id:number){
      this.admain.deleteCart(id).subscribe(res=>{
        alert("cart deleted success");
      })
   }
   view(index:number){
    this.details = this.carts[index];
    console.log(this.details);
   }
}
