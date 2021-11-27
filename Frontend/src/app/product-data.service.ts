import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './Products';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  BASE_URL='http://localhost:3000/routes/products'
 
  constructor(private http: HttpClient) { } 

  getProducts():Observable<Products[]>{
		//Ajax calls to fetch the list of users
		return this.http.get<Products[]>(this.BASE_URL); //was not working with cors because wrong url
	  }

  
}
