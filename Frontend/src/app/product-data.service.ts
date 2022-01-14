import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './Products';
import { number } from 'mathjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  BASE_URL='http://localhost:3000/routes/products'
  newProduct:{id:Number,name: string; price: Number} ;
  newPrice:{price:Number}
  constructor(private http: HttpClient) { 
    this.newProduct = {id:0,name: "" ,price:0} ;
    this.newPrice={price:0}
  } 

  getProducts():Observable<Products[]>{
		//Ajax calls to fetch the list of users
		return this.http.get<Products[]>(this.BASE_URL); //was not working with cors because wrong url
	  }
    
    
	  addProducts(products:{id:Number,name: string; price: Number}){
      console.log( this.http.post(this.BASE_URL, products))
      let x = this.http.post(this.BASE_URL, products)
      console.log(x)
      return x
      }
  
}
