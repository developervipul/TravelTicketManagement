import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from '../../models/user.interface'
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  firstNameControl: FormControl;
  lastNameControl: FormControl;
  businessUnitControl: FormControl;
  titleControl: FormControl;
  emailControl: FormControl;
  telephoneControl: FormControl;
  address1Control: FormControl;
  address2Control: FormControl;
  cityControl: FormControl;
  stateControl: FormControl;
  zipControl: FormControl;
  countryControl: FormControl;
  constructor(  
    private userService: UserService
  ) { }

  ngOnInit() {
    this.firstNameControl = new FormControl('', [Validators.required]);
    this.lastNameControl = new FormControl('', [Validators.required]);
    this.businessUnitControl = new FormControl('', [Validators.required]);
    this.titleControl = new FormControl('', [Validators.required]);
    this.emailControl = new FormControl('', [Validators.required]);
    this.telephoneControl = new FormControl('', [Validators.required]);
    this.address1Control = new FormControl('', [Validators.required]);
    this.address2Control = new FormControl('', [Validators.required]);
    this.cityControl = new FormControl('', [Validators.required]);
    this.stateControl = new FormControl('', [Validators.required]);
    this.zipControl = new FormControl('', [Validators.required]);
    this.countryControl = new FormControl('', [Validators.required]);




    this.userForm = new FormGroup({
      firstName : this.firstNameControl,
      lastName : this.lastNameControl,
      businessUnit : this.businessUnitControl,
      title : this.titleControl,
      email : this.emailControl,
      telephone: this.telephoneControl,
      address1 : this.address1Control,
      address2 : this.address2Control,
      city : this.cityControl,
      state : this.stateControl,
      zip : this.zipControl,
      country : this.countryControl
    });
  }

  
  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };

  }

  createUser(): void {
    this.user = this.userForm.value;
    console.log("user in register"+this.user)
    this.userService.createUser(this.user)
        .subscribe( ()=> {
          alert("User registered  successfully.");
        });

  };


  // get Email(){
  //   return this.userEmails.get('Email')
  //   }

  //   userEmails = new FormGroup({
  //    Email: new FormControl('',[
  //     Validators.required,
  //     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  //   });  

}
