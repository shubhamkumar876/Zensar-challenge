import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  public user:any;
  public flag: boolean = false;

  public storage:Storage = sessionStorage;

  constructor(public profileService: ProfileService,
              private route: ActivatedRoute,
              private router: Router) { 

                this.flag = JSON.parse(this.storage.getItem('userComponent')!) != null ? JSON.parse(this.storage.getItem('userComponent')!):false;
              }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleUserDetails();
    })

    console.log("flag = " + this.flag);
  }

  handleUserDetails() {
    
    // get the "id" param string. convert string to a number using the "+" symbol
    const theUserId: number = +this.route.snapshot.paramMap.get('id')!.valueOf();

    this.user = this.profileService.profile;
      
  }

  addTomyDB(temp:any){

    this.profileService.addTomyDB(temp).subscribe(
      {
        next: response => {
          alert(`User have been added to myDB.`);
          
          this.router.navigateByUrl('/user');
        },
        error: err => {
          alert(`Something went wrong: ${err.message}`);
        }
      }
  );
  }

  updateInmyDb(temp:any){

    this.profileService.updateInmyDB(temp).subscribe(
      {
        next: response => {
          alert(`User details updated.`);
  
          //this.router.navigateByUrl('/user');
          
        },
        error: err => {
          alert(`Something went wrong: ${err.message}`);
          this.router.navigateByUrl('/user');
        }
      }
  );
  }

  deletefrommyDB(id:any){

    this.profileService.deletefrommyDB(id).subscribe(
      {
        next: response => {
          alert(`User has been deleted!!!!`);
  
          this.router.navigateByUrl('/myDB');
          
        },
        error: err => {
          alert(`Something went wrong: ${err.message}`);
          this.router.navigateByUrl('/myDB');
        }
      }
  );
  }

}
