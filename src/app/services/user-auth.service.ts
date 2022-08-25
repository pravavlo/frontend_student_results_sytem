import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserAuthService{
  loginStatus = new Subject<boolean>()
  constructor() {
  }
  public setRoles(roles:[]){
    sessionStorage.setItem("roles" , JSON.stringify(roles))
  }
  public getRoles(): [] {
    return JSON.parse(sessionStorage.getItem('roles') !);
  }
  public setToken(jwtToken: string){
    sessionStorage.setItem("jwtToken", jwtToken)
    this.loginStatus.next(true);
  }
 public  getToken(): string |null {

   return sessionStorage.getItem('jwtToken');
 }
 public clear(){
    sessionStorage.clear();
    this.loginStatus.next(false)
 }
 public isLoggedIn():boolean{
    return !!(this.getRoles() && this.getToken());
 }

}
