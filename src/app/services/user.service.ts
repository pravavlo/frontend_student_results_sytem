import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../user";
import {UserAuthService} from "./user-auth.service";




@Injectable({
  providedIn: 'root'
})
export class UserService {
    PATH_OF_API="http://localhost:8080";
    usersUrl: string;
    requestHeader = new HttpHeaders(
      {"No-Auth": "True"}
    )

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) {
    this.usersUrl = 'http://localhost:8080/registration';
  }

addUser(user?:User):Observable<Object>{
    return this.httpClient.post<Object>(`${this.usersUrl}`, user)
}
public login(loginData: any){
return this.httpClient.post(this.PATH_OF_API +"/login", loginData, {headers: this.requestHeader})
}


  // @ts-ignore
  public roleMatch(allowedRoles: any[]):boolean{
      let isMatch = false;
      const userRoles: any= this.userAuthService.getRoles();
      if(userRoles!= null && userRoles){
        for(let i=0; i< userRoles.length; i++){
          for(let j=0; j < allowedRoles.length ; j++){
            if (userRoles[i].roleName === allowedRoles[j]){
          isMatch= true;
          return isMatch;
          }else{
            return isMatch;
          }
          }
        }
      }
}
}
