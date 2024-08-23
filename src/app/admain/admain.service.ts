import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmainService {
  sigin(name: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) {
  }
  getAllCarts(param?:any){
    let params = new HttpParams();
    params = params.append("startDate",param?.start).append("endData",param?.end);
    return this.http.get('https://fakestoreapi.com/carts',{params});
  }

  createProduct(product:any){
    return this.http.post('https://fakestoreapi.com/products',product);
    
  }
  deleteCart(id:number){
    return this.http.delete('https://fakestoreapi.com/carts/' + id);
  }
  getProduct(){
    return this.http.get('http://localhost:3005/product');
  }
  setProduct(model:any)
  {
    return this.http.post('http://localhost:3005/product',model);
  }
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`http://localhost:3005/product/${productId}`);
  }
  updateProduct(product: any,id:number) {
    return this.http.put(`http://localhost:3005/product/${id}`, product);
  }
  fetchdata(id:number){
    return this.http.get(`http://localhost:3005/product/${id}`);
  }
  getUsers(){
    return this.http.get(`http://localhost:3005/users`);
  }
  addUsers(data: any, password: any) {
    // Combine data and password into a single object to send to the server
    const user = { ...data, password };
    return this.http.post('http://localhost:3005/users', user);
  }
  
}