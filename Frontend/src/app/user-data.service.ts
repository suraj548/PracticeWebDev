import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './User'
import { Observable } from 'rxjs';

type userInfo={
	email:string,
	name:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
	BASE_URL='http://localhost:3000/routes'
	newUser:{Fname:string,Lname:string,Shopno:string,email: string; password: string} ;
	returningUser:{ Shopno: string; password: string }  
	constructor(private http: HttpClient,private router:Router) {
		this.newUser = {Fname:"",Lname:"",Shopno:"",email: "" ,password: ""} ;
		this.returningUser = {Shopno: "", password: ""}
		console.log("products Data service invoked");  
    	
	}
	getUsers():Observable<User[]>{
		//Ajax calls to fetch the list of users
		return this.http.get<User[]>(this.BASE_URL+'/users'); //was not working with cors because wrong url
	  }
	login(user:{Shopno:string, password:string}){
		let a =  this.http.post<{token:string}>(this.BASE_URL+'/login', user)
		console.log(a)
		return a
	  }
	
	loggedIn(){
		return !!localStorage.getItem('token') 
	}
	getToken(){
		return localStorage.getItem('token')
	}
	logOut(){
		localStorage.removeItem('token')
		this.router.navigate(['/'])

	}
	profile(){
		return this.http.get<userInfo>(this.BASE_URL+'/profile')
	}
 
	  register(users:{Fname:string,Lname:string,Shopno:string,email:string,password:string}){
		return this.http.post(this.BASE_URL+'/register', users)
	  }

	  /*userProfileInformation(){
		return this.http.get<User>(this.BASE_URL+'/users');
	}*/
}  