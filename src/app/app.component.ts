import { Component, OnInit } from '@angular/core';
import {UserAuthService} from "./services/user-auth.service";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'results-view';
  loginstatus?:boolean;
  constructor(private userAuthService: UserAuthService,
              public userService: UserService) {

  }
  isLoggedIn(){
    this.loginstatus= this.userAuthService.isLoggedIn();
  }
  ngOnInit() {
    this.isLoggedIn();
    this.userAuthService.loginStatus.asObservable().subscribe((data)=>{
    this.isLoggedIn();
    }
    )
  }
  public logout(){
    this.userAuthService.clear();
  }
}
