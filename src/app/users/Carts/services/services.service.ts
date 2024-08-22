import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
    createNewCart(model:any){
        return this.http.post('https://fakestoreapi.com/carts',model);
    }
}
