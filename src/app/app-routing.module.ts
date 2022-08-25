import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {InfoComponent} from "./info/info.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {UniversityComponent} from "./university/university.component";
import {UniversityIDComponent} from "./university/university-id/university-id.component";
const routes: Routes = [
  {path:'', redirectTo:'registration', pathMatch:"full"},
  {path:'home',component:RegistrationComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path: 'info', component: InfoComponent},
  {path:'forbid', component: ForbiddenComponent},
  {path:'university' ,component: UniversityComponent},
  {path:'university/:id', component: UniversityIDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
