import { Messages } from './../../info';
import { MessagesService } from './../../messages.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public msgList:MessagesService,private router:Router) { }

  ngOnInit(): void { 
  }

  onSave(){
		this.msgList.addMessage(this.msgList.newInfo).subscribe(data => {
			if(data === true) { 
				alert('Data stored,now you are redirected productlist')
				console.log(this.msgList.newInfo)
				this.router.navigate(['/message-list'])
			} // redirect to the appropriate page
			else{
				alert('Product with this id allready exists')
			}
			console.log(data)
			console.log(this.msgList.newInfo)
		},
		error => {
			console.log(error)
			alert('Problem in saving the data')
		})
}

}