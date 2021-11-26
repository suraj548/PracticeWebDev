import { UserService } from './../../user-data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  

  users:Array<User> | undefined
  constructor(private userList:UserService) {
   }

  
   user:Array<User> | undefined

  ngOnInit(): void {
    //this.user = this.userList.getUserList()
    this.userList.getUsers().subscribe(users=>{
      this.user=users;
    },error=>console.log(error))
  }

}
