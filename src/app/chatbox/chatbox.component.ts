import { Component, OnInit , Input  } from '@angular/core';
import { dataaa } from './dataa';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  endpoint = 'http://localhost:8082/chats/streams?messageId=';

  arraychat: dataaa[] = [];
  chat: any = [];
  listt: any;
  @Input() item = '';
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.item);
    let source = new EventSource(this.endpoint+this.item);
    source.addEventListener('message', message=>{
      let str: string = message.data;
      this.arraychat.push(JSON.parse(str))
      this.listt = this.arraychat;
      console.log(this.listt)
    })

  }

  sendChat(message:HTMLInputElement){

    const val = {
      "messageId":this.item,
      "messages":[{
          "message":message.value,
          "from":"testfrom",
          "to":"testTo",
          "time":"2021-12-14T03:55:45.000+00:00"
      }],
      "matchedDate":"2021-12-14T03:55:45.000+00:00"
  }
    this.http.post('http://localhost:8082/chats',val).subscribe(res=>{
      console.log(res);
    })
    message.value='';
  }
}
