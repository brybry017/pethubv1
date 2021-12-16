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
  constructor(private service:BackendService, private router: Router) { }

  ngOnInit(): void {
    this.service.obserableSession.subscribe(res =>{
      this.username = res;
    })
    this.service.getPets(this.username).subscribe(res=>{
      this.myDogs = res;
      console.log(this.myDogs);
    })

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
