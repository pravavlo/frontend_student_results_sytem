import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Universe} from "../universe";


@Injectable({
  providedIn: 'root'
})

export class UniversityService {

  PATH_OF_API="http://localhost:8080/getUniversity";
  POSTER ="http://localhost:8080/addUniversity";
  constructor(private http:HttpClient) { }
  getUniversity(){
    return this.http.get<any>(this.PATH_OF_API)
  }
  getUniverse( id:any){
    return this.http.get<any>(`${this.PATH_OF_API}/${id}`);
  }
  postUniversity(universe?: Universe): Observable<Object>{
    return this.http.post<Object>(`${this.POSTER}`, universe);
  }
}
