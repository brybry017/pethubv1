import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs'
import { doguse } from './doguse';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private session = "";
  private usersession = new BehaviorSubject<String>(this.session);
  obserableSession = this.usersession.asObservable();

  private gender = "";
  private doggender = new BehaviorSubject<String>(this.gender);
  doggenderobs = this.doggender.asObservable();

  private dogUseInfo = new BehaviorSubject<doguse>({} as any);
  dogUsee = this.dogUseInfo.asObservable();


  constructor(private http:HttpClient, private router: Router ) { }

  endpointlogin = 'http://localhost:8081/login';
  endpointpet = 'http://localhost:8080/';
  endpointchat = 'http://localhost:8082/';

  login(val:Object,username1:String){
    return this.http.post(this.endpointlogin,val).subscribe(
      data => console.log(data),
      error => {
        if(error.status == 200){
          alert(error.error.text)
          this.usersession.next(username1);
          this.router.navigate(['/list'])
        }else{
          alert(error.error)
        }
      }
    );
  }

  getPets(username1:String){
    return this.http.get(this.endpointpet+"dogOwned/"+username1)
  }
  getFindMatch(username1:String){
    return this.http.get(this.endpointpet+"findMatches?username="+username1);
  }

  matchPet(val:Object){
    return this.http.post(this.endpointpet+"swipedRight",val).subscribe(
      data => console.log(data),
      error => {
        if(error.status == 200){
          alert(error.error.text)
        }else{
          alert(error.error)
        }
      }
    );
  }

  Currentt(daa: any){
    this.dogUseInfo.next(daa);
  }
}
