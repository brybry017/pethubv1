import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router} from '@angular/router';
import { doguse } from '../doguse';
@Component({
  selector: 'app-selectedlist',
  templateUrl: './selectedlist.component.html',
  styleUrls: ['./selectedlist.component.css']
})
export class SelectedlistComponent implements OnInit {

  username:any;
  myDogs: any;
  doguseList: doguse={
    username: '',
    petName: '',
    breed: '',
    gender: ''
  };
  currentItem = '';
  channelList:any;
  channelListv1:any;
  constructor(private service:BackendService, private router: Router) { }

  ngOnInit(): void {

    this.service.obserableSession.subscribe(res =>{
      this.username = res;
    })

    this.service.getChannels(this.username).subscribe(res=>{
      this.channelList = res;
      console.log(this.channelList);
     this.channelListv1 = this.channelList.channels;
     console.log(this.channelListv1);
    })

    this.service.getPets(this.username).subscribe(res=>{
      this.myDogs = res;
      console.log(this.myDogs);
    })

  }

  channel(channels:string){
    this.currentItem = channels;
    console.log(this.currentItem);
  }

  FindMatch(list:any){
    this.doguseList.username = list.dogOwner;
    this.doguseList.petName = list.petName;
    this.doguseList.breed = list.breed;
    this.doguseList.gender = list.gender;
    this.service.Currentt(this.doguseList);
    this.router.navigate(['/findmatch',list.gender])
  }

}
