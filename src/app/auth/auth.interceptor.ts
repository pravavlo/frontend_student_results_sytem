import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { catchError} from "rxjs/operators";
import {UserAuthService} from "../services/user-auth.service";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private userAuthService:UserAuthService,
              private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get("No-Auth") === 'True') {
      return next.handle(req.clone())
    }
    const token = this.userAuthService.getToken();
    req=this.addToken(req, token);
    return next.handle(req).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err.status);
          if(err.status=== 401){
            this.router.navigate(['/university'])
          }else if(err.status=== 403){
            this.router.navigate(['/forbid'])
          }
            return throwError(()=>new Error("Some things went wrong"));
        }
      )
    );
  }

  private addToken(request: HttpRequest<any>, token: string | null){
    return request.clone(
    {
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    }
  )
}
}
