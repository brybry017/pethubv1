import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-animal-tinder';

  usernameSession:any;

  constructor(private service:BackendService){

  }
  ngOnInit(): void {
    this.service.obserableSession.subscribe(res =>{
      this.usernameSession = res;
    })
  }
}
