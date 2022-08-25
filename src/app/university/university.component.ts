import { Component, OnInit } from '@angular/core';
import {UniversityService} from "../services/university.service";
import {FormGroup} from "@angular/forms";
import {Universe} from "../universe";



@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  universitys: any;
  id?:any;
  universe: Universe = new Universe();
  constructor(private universityService: UniversityService) {
  }

  ngOnInit(): void {
    this.universityService.getUniversity().subscribe((data:any)=>{
      console.log("universe :",data);
      this.universitys=data;
    },error => {
      console.log(error.error)
    });
  }
  universitySubmitted(){

    this.universityService.postUniversity(this.universe).subscribe(
      (response) =>{
    alert('this is it')
      },
      error => {
        console.log(error.error)
      }
    );
  }
}
