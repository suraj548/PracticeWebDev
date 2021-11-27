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
  router: any;
 
  //email : string | undefined
  //password : string | undefined 
  constructor(public userService: UserService) { }
 
  ngOnInit(): void {

  }
 
  Onsave():void{
    this.userService.login(this.userService.returningUser).subscribe(
      data => {
				if(data === true) {
          alert('login sucessfull')
        } // redirect to the appropriate page
				else{
           alert('login not sucessfull')
        }
			},
			error => {
				console.log(error)
				//alert('Problem with connection')
			}
    )
	}

  resetForm(): void {
		this.userService.returningUser = {
			email: "",
			password: ""
		}
	}

}



