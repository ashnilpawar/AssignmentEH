import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { LoginComponent } from './login/login.component';

import { MenulistComponent } from './menulist/menulist.component';
import { RefreshComponent } from './refresh.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', redirectTo: '/home/profile', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'userlist', component: UserlistComponent },
      { path: 'user/edit/:id', component: UserComponent }
    ]
  },
  { path: 'refresh', component: RefreshComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [
  HomeComponent,
  UserComponent,
  UserlistComponent,
  LoginComponent,
  MenulistComponent,
  RefreshComponent
]