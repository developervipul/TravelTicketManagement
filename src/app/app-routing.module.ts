import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {AuthGaurdService}  from './service/auth-gaurd.service';




const routes: Routes = [

  // {path: '', component: LoginComponent, pathMatch: 'full'},

  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'homepage/:userId', component: HomepageComponent,canActivate:[AuthGaurdService]},
  {path: 'home/:id', component: ViewTicketComponent,canActivate:[AuthGaurdService]},
  {path: 'register', component: RegisterComponent},
  {path: 'home/:userId/ticket/:ticketId', component: AddTicketComponent,canActivate:[AuthGaurdService]},
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }