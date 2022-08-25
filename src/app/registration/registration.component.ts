import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {User} from "../user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;
user:User = new User();



  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }


  ngOnInit() {
    this.registerForm = this.fb.group({
        userName: ['', Validators.required],
        userFirstName: ['', Validators.required],
        userLastName: ['', Validators.required],
      userPassword: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')])]
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(" not submitted")
    if (this.registerForm.valid) {
        console.log(this.user)
        this.userService.addUser(this.user).subscribe();
      this.router.navigate(['/login']);
      alert('Form Submitted success!!!\n GO to login page now');
    }
  }

}
