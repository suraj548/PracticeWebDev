import { Messages } from './info';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  BASE_URL2='http://localhost:3000/routes/message'
  newInfo:{id:Number,name:string,desc:string}
  constructor(private http: HttpClient) {
    this.newInfo={id:0,name:"",desc:""}
   }
   getMessages():Observable<Messages[]>{
		//Ajax calls to fetch the list of users
		return this.http.get<Messages[]>(this.BASE_URL2); //was not working with cors because wrong url
	  }
   addMessage(info:{id:Number,name:string,desc:string}){
    return this.http.post(this.BASE_URL2,info)
  }
}
