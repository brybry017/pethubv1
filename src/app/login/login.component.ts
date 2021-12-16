import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private backendservice: BackendService) { }

  ngOnInit(): void {
  }

  loginSpring = this.formBuilder.group({
    username: '',
    password: '',
  });

  async post(){
    const val ={
      "username":this.loginSpring.value.username,
      "password":this.loginSpring.value.password
    }
    this.backendservice.login(val,this.loginSpring.value.username);
  }

}
