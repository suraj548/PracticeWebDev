import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-data.service';



@Component({
	selector: 'register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})
export class  RegisterComponent implements OnInit {

	email : string | undefined
	password : string | undefined
	
	
	constructor(public userService: UserService,private router:Router) {

	}

	ngOnInit(): void {

	}


	onSubmit(){
		this.userService.register(this.userService.newUser).subscribe(data => {
			if(data === true) {
				alert('Data stored,now you are redirected to login')
				this.router.navigate(['/login'])
			} // redirect to the appropriate page
			else{
				alert('user exists')
			}
		},
		error => {
			console.log(error)
			alert('Problem in saving the data')
		})
	} 

	resetForm(): void {
		this.userService.newUser={
			name:"",
			email: "",
			password: ""
		}
	}
}