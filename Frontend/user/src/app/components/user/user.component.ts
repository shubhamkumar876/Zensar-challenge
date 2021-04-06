import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:Array<any> = [];

  storage:Storage = sessionStorage;

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {

    this.profileService.getUsers().subscribe(
      data => {
        this.users = data
      });

      this.storage.setItem('userComponent',JSON.stringify(true));

  }

  addToMydb(temp:any){

    this.profileService.addTomyDB(temp).subscribe(
      {
        next: response => {
          alert(`User have been added to myDB.`);
          
        },
        error: err => {
          alert(`Something went wrong: ${err.message}`);
        }
      }
  );
  }

}
