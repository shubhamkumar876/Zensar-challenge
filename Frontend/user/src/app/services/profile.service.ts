import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profile:any;

  public filter:any;

  private user!:User;

  public name:any;
  public Image:any;

  private baseUrl = 'https://s3.ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';

  private addUrl = 'http://localhost:8080/api/users';

  constructor(private httpClient:HttpClient,
                private router:Router) { 
    this.profile = JSON.parse(sessionStorage.getItem('profile')!) != null ? JSON.parse(sessionStorage.getItem('profile')!):0;
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl).pipe(
      response => {
       console.log("resposne = " + response);
       return response
      });
  }

  storing(){
    sessionStorage.setItem('profile', JSON.stringify(this.profile));
  }

  forDetails(theProfile:any){

      this.profile = theProfile;
      this.storing();
      
  }

  reset(){
    this.profile = 0;
    sessionStorage.clear();
    this.router.navigateByUrl('/user');
  }

  addTomyDB(temp:User):Observable<any>{

    return this.httpClient.post<any>(this.addUrl, temp);
  }

  deletefrommyDB(id:number):Observable<any>{

    const deleteUrl = `${this.addUrl}/${id}`;

    return this.httpClient.delete<any>(deleteUrl);
  }


  getUsersFromDB():Observable<any>{
    return this.httpClient.get<any>(this.addUrl).pipe(
      response => {
       console.log("resposne = " + response);
       return response
      });
  }

  updateInmyDB(temp:any):Observable<any>{

    const updateUrl = `${this.addUrl}/${temp.id}`;

    temp.name = this.name;
    temp.Image = this.Image;

    return this.httpClient.put<any>(updateUrl,temp);

  }

}




