import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usernameControl: FormControl;
  passwordControl: FormControl;
  invalidLogin = false

  errorMessage= 'Invalid Credentials!. Please Try again';
  
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    this.usernameControl =  new FormControl('', [Validators.required]);
    this.passwordControl =  new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl
    });
  }

  checkLogin() {
    const {username, password} = this.loginForm.value;
    if (this.loginservice.authenticate(username, password)
    ) {
      this.router.navigate(['home',1])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}