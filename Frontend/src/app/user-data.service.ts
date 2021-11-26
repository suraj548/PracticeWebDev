import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './User'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
	
	userList:Array<User>

	constructor(private http: HttpClient) {
		console.log("products Data service invoked");
    	this.userList=new Array<User>(); 
   		let u1 = new User('suraj','suraj@548','1234');
   		let u2 = new User('kiran','kiran@548','1234');
    	this.userList.push(u1);
    	this.userList.push(u2);
	}
	getUsers():Observable<User[]>{
		//Ajax calls to fetch the list of users
		return this.http.get<User[]>('http://localhost:3000/routes'); //was not working with cors because wrong url
	  }
	getUserList(){
		return this.userList;
	  }
}