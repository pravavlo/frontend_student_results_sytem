import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InfoComponent } from './info/info.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./auth/auth.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {UserService} from "./services/user.service";
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UniversityComponent } from './university/university.component';
import { UniversityIDComponent } from './university/university-id/university-id.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    InfoComponent,

    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    UniversityComponent,
    UniversityIDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthGuard,{
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
