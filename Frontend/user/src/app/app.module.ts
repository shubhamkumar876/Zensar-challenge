import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileService } from './services/profile.service';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MyDBComponent } from './components/my-db/my-db.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';



const routes: Routes = [
  
  {path:'newUser', component:AddUserComponent},
  {path:'myDB', component:MyDBComponent},
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'user', component: UserComponent},
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: '**', redirectTo: '/user', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    MyDBComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
