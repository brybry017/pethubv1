import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';
import { doguse } from '../doguse';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  listOfDogsFind:any;
  dogSwipInfo:any=[];
  genderr:any;
  username:any;
  doguseList: any;
  constructor(private route: ActivatedRoute,private service:BackendService) { }

  ngOnInit(): void {
    this.genderr =this.route.snapshot.paramMap.get('gender');
    console.log(this.genderr);
    this.service.obserableSession.subscribe(res=>{
      this.username = res;
    })
    this.service.getFindMatch(this.username).subscribe(res=>{
      this.listOfDogsFind = res;
      for(let i=0; i<this.listOfDogsFind.length; i++){
        if(this.listOfDogsFind[i].gender !== this.genderr){
          const dogInfo={
            petName:this.listOfDogsFind[i].petName,
            dogOwner:this.listOfDogsFind[i].dogOwner,
            breed:this.listOfDogsFind[i].breed,
            image:this.listOfDogsFind[i].imageurl[0]
          }
           this.dogSwipInfo.push(dogInfo);
           console.log(this.dogSwipInfo);
        }
      }
    })

    this.service.dogUsee.subscribe(res=>{
      this.doguseList = res;
      console.log(this.doguseList)
    });
  }
  post(item:any){
    const val={
    "swipedBy": this.doguseList.username,
    "petName":  this.doguseList.petName,
    "breedSwipedBy": this.doguseList.breed,
    "usernameSwipped":item.dogOwner,
    "petLike":item.petName,
    "breedLike":item.breed
    }
    this.service.matchPet(val);
  }

}
