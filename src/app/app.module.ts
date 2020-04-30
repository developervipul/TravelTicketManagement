import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../app/service/user.service';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewTicketComponent,
    FooterComponent,
    LogoutComponent,
    AddTicketComponent,
    RegisterComponent,
    HeaderComponent,
    HomepageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],

  providers: [
    UserService,{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
