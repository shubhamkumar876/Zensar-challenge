import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public newUserForm!: FormGroup;

  constructor(private profileService: ProfileService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {

    this.newUserForm = this.formBuilder.group ({
      user: this.formBuilder.group({
        id: new FormControl('', [Validators.required,Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),
        name: new FormControl('', [Validators.required,Validators.minLength(3)]),
        Image: new FormControl('', [Validators.required])
      })
    });

  }

  get id() {
    return this.newUserForm.get('user.id');
  }

  get name() {
    return this.newUserForm.get('user.name');
  }
  get Image() {
    return this.newUserForm.get('user.Image');
  }

  onSubmit(){
    if (this.newUserForm.invalid) {
      this.newUserForm.markAllAsTouched();
      return;
    }


    let newUser = new User();
    newUser = this.newUserForm.controls['user'].value;

    this.profileService.addTomyDB(newUser).subscribe(
      {
        next: response => {
          alert(`User have been added to myDB.`);
          
          this.router.navigateByUrl('/myDB');
        },
        error: err => {
          alert(`Something went wrong: ${err.message}`);
        }
      }
  );

  }


}
