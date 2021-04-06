import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-my-db',
  templateUrl: './my-db.component.html',
  styleUrls: ['./my-db.component.css']
})
export class MyDBComponent implements OnInit {

  users:Array<any> = [];
  storage:Storage = sessionStorage;

  constructor(public profileService:ProfileService,
              private router: Router) {
    
   }

  ngOnInit(): void {

    this.profileService.getUsersFromDB().subscribe(
      data => {
        this.users = data
      });

      this.storage.setItem('userComponent',JSON.stringify(false));
  }

  deleteFromMydb(id:any){

    this.profileService.deletefrommyDB(id).subscribe(
      {
        next: response => {
          alert(`Your Order has been deeleted. `);
  
          this.ngOnInit();
          
        },
        error: err => {
          alert(`Something went wrong: ${err.message}`);
        }
      }
  );
    }


}
