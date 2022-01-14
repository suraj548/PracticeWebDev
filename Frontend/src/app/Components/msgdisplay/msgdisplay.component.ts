import { Messages } from './../../info';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-msgdisplay',
  templateUrl: './msgdisplay.component.html',
  styleUrls: ['./msgdisplay.component.css']
})
export class MsgdisplayComponent implements OnInit {
  msg:Array<Messages> | undefined
  constructor(public msgList:MessagesService) { }

  ngOnInit(): void {
    this.msgList.getMessages().subscribe(message=>{
      this.msg=message;
    },error=>console.log("Error in fetching data"))
  }

}
