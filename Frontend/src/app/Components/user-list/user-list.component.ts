import { UserService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  

  userList: Array<User> | undefined;
  constructor(private userservice:UserService) {

   }
 
  ngOnInit(): void {
    this.userservice.getUsers().subscribe(users=>{
      this.userList=users;
    },error=>console.log("Error in fetching data"))
  }
 
}
