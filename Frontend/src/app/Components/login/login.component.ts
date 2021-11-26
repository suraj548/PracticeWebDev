import { UserService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
 
   email : string | undefined
  password : string | undefined
  constructor() { }
 
  ngOnInit(): void {

  }
 
  Onsave():void{
    
    alert('login sucessfull')
    
	
	}
}



