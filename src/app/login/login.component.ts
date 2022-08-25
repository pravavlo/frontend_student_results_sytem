import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {UserAuthService} from "../services/user-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService,
              private userAuthService : UserAuthService,
             private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
    console.log("logged in user")
    this.userService.login(loginForm.value).subscribe(
      (response :any)=>{
        console.log(response.jwtToken);
        console.log(response.user.role);
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        const role = response.user.role[0].roleName;
        if (role==='ADMIN'){
          this.router.navigate(['/university']);
        }else {
          this.router.navigate(['/info'])
        }
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
