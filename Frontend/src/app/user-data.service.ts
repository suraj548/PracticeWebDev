import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './User'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
	BASE_URL='http://localhost:3000/routes'
	newUser:{name:string,email: string; password: string} ;
	returningUser:{ email: string; password: string; } 

	constructor(private http: HttpClient) {
		this.newUser = {name:"",email: "" ,password: ""} ;
		this.returningUser = {email: "", password: ""}
		
		console.log("products Data service invoked");
    	
	}
	getUsers():Observable<User[]>{
		//Ajax calls to fetch the list of users
		return this.http.get<User[]>(this.BASE_URL); //was not working with cors because wrong url
	  }

	  login(user:{email:string, password:string}){
		return this.http.post(this.BASE_URL+'/login', user)
	  }

	  register(users:{name:string,email:string,password:string}){
		return this.http.post(this.BASE_URL+'/register', users)
	  }

} 