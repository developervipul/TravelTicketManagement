import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from '../../models/ticket.interface';
import { UserService } from '../../service/user.service';
import { TicketService } from '../../service/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})

export class AddTicketComponent implements OnInit {
  ticketForm: FormGroup;
  ticket: Ticket;
  requestTypeControl: FormControl;
  priorityControl: FormControl;
  travelCityControl: FormControl;
  fromLocationCityControl: FormControl;
  travelStartDateControl: FormControl; 
  travelEndDateControl: FormControl; 
  passportNoControl: FormControl; 
  projectNameControl: FormControl; 
  expenseBourneByControl: FormControl;
  travelApproverNameControl: FormControl;
  expectedDurationControl: FormControl; 
  upperBoundAmountControl: FormControl;
  additionalDetailControl: FormControl; 

  constructor(private route: ActivatedRoute,
    private ticketService: TicketService, private router : Router) { }

  //for adding user details along with tickets

  userId: number;

  //this will be used for upadating tickets

  ticketId: number;

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.ticketId = this.route.snapshot.params['ticketId'];

    this.requestTypeControl = new FormControl('', [Validators.required]);
    this.priorityControl = new FormControl('', [Validators.required]);
    this.travelCityControl = new FormControl('', [Validators.required]);
    this.fromLocationCityControl = new FormControl('', [Validators.required]);
    this.travelStartDateControl = new FormControl('', [Validators.required]); 
    this.travelEndDateControl = new FormControl('', [Validators.required]);
    this.passportNoControl = new FormControl('', [Validators.required]);
    this.projectNameControl = new FormControl('', [Validators.required]);
    this.expenseBourneByControl = new FormControl('', [Validators.required]);
    this.travelApproverNameControl = new FormControl('', [Validators.required]);
    this.expectedDurationControl = new FormControl('', [Validators.required]);
    this.upperBoundAmountControl = new FormControl('', [Validators.required]);
    this.additionalDetailControl = new FormControl('', [Validators.required]);

    this.ticketForm = new FormGroup({
      requestType : this.requestTypeControl,
      priority : this.priorityControl,
      travelCity : this.travelCityControl,
      fromLocationCity : this.fromLocationCityControl,
      travelStartDate : this.travelStartDateControl,
      travelEndDate : this.travelEndDateControl,
      passportNo : this.passportNoControl,
      projectName : this.projectNameControl,
      expenseBourneBy : this.expenseBourneByControl,
      travelApproverName : this.travelApproverNameControl,
      expectedDuration : this.expectedDurationControl,
      upperBoundAmount : this.upperBoundAmountControl,
      additionalDetail : this.additionalDetailControl,
    })

  }

  createTicket(){
    this.ticket = this.ticketForm.value;
    this.ticketService.createTicket(this.ticket, this.userId).subscribe(() => this.handleSuccess(), 
    error => error => this.handleErrorResponse(error));
  }

  handleSuccess(){
    console.log('ticket submitted sucessfully')
    this.router.navigate(['home',this.userId]);
  }


  handleErrorResponse(error) {
    console.log('Error getting user tickes ', error);
    console.log('Error getting user tickes ', error.error.message);
  }

}


























// import { Component, OnInit } from '@angular/core';
// import {EmployeeTicketService, Ticket}  from '../service/ticket.service';
// import {ActivatedRoute} from '@angular/router';

// @Component({
//   selector: 'app-add-ticket',
//   templateUrl: './add-ticket.component.html',
//   styleUrls: ['./add-ticket.component.css']
// })
// export class AddTicketComponent implements OnInit {

//   ticket: Ticket = new Ticket("","","","","","","","","","","","","","")
//   employeeid: number;

//   constructor(
//     private httpEmployeeService: EmployeeTicketService,private route: ActivatedRoute
//   ) { }

//   ngOnInit() {
//     this.employeeid = this.route.snapshot.params['employeeid'];
//   }

//   createTicket(): void {
//     this.httpEmployeeService.createTicket(this.ticket,this.employeeid)
//         .subscribe( data => {
//           alert("Ticket request created successfully.");
//         });

//   };
// }