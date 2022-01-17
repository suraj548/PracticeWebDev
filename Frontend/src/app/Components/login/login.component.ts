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
  
 
  //email : string | undefined
  //password : string | undefined 
  constructor(public userService: UserService,private router:Router) { }
 
  ngOnInit(): void {
 
  }   
 
  Onsave():void{
    this.userService.login(this.userService.returningUser).subscribe(
      data => {
				if(data) { 
          localStorage.setItem('token',data.token)
         alert('login sucessfull')
         this.router.navigate(['/profile'])
        // console.log(data.token)
        // this.router.navigate(['/profile'])
        } // redirect to the appropriate page
        else{
          alert("Wrong password or username")
        }
			},
			error => {
				console.log(error)
				//alert('Problem with connection')
			}
    )
    this.resetForm()
	}

  resetForm(): void {
		this.userService.returningUser = {
			email: "",
			password: ""
		}
	}

}



