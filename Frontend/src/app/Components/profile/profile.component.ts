import { Router } from '@angular/router';
import { UserService } from 'src/app/user-data.service';
import { Component, OnInit } from '@angular/core';

type userInfo={
	email:string,
	Fname:string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:userInfo={email:"",Fname:""}
  constructor(private userSer:UserService,private router:Router) { 
    this.userSer.profile().subscribe(
      result=>{
        if(this.userSer.loggedIn()){ 
          this.user.Fname
          console.log(result)
        }
       if(!this.userSer.loggedIn()){
         alert("login")
       }
      },
      err=>{
        alert(err)
        console.log(err)
      })
  }

  ngOnInit(): void {
  }

}
