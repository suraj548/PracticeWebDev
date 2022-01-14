import { User } from './../../../User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { string } from 'mathjs';
import { UserService } from 'src/app/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  useremail: string | undefined;
  details: User|undefined;
  detail: User|undefined;
  

  constructor(private activateRoute:ActivatedRoute,private userList:UserService) {
    this.activateRoute.params.subscribe(newparams=>{
      //read the route parameter which is an observable
      this.useremail=newparams['email']; 
                          //here we are reading just the router parameter to the view
    })
   }

  ngOnInit(): void { 
  }
 
}
