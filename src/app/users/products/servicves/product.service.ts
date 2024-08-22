import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
  addProduct(newProduct: { title: any; price: any; description: any; image: any; category: any; }) {
    throw new Error('Method not implemented.');
  }
  baseUrl:any = 'http://localhost:3005/product';
  baseUrl_Category:any = 'https://fakestoreapi.com/products/categories';

  constructor(private http:HttpClient) { }
  getAllProduct(){
    return this.http.get(this.baseUrl);
  }
  getAllCategories(){
    return this.http.get(this.baseUrl_Category);
  }
  getProductsByCategory(category:any){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
  }
  getProductById(id:any){
      return this.http.get(this.baseUrl +'/'+ id);
  }
}
