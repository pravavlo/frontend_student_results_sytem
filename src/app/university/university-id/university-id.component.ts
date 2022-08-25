import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "../../services/university.service";

@Component({
  selector: 'app-university-id',
  templateUrl: './university-id.component.html',
  styleUrls: ['./university-id.component.css']
})
export class UniversityIDComponent implements OnInit {
  id?:any
  university: any;

  constructor(private activatedRoute:ActivatedRoute,private universityService: UniversityService) {    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.universityService.getUniverse(this.id).subscribe((beta:any)=>
    {
      this.university =beta;
    }, error=>{
      console.log(error.error);
    })
  }

}
