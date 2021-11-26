import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../user-data.service';

@Component({
	selector: 'register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})
export class  RegisterComponent implements OnInit {

	email : string | undefined
	password : string | undefined
	
	constructor() {

	}

	ngOnInit(): void {

	}


	onSubmit(){
		alert("Details saved")
	}
}