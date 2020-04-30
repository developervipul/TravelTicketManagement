import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../service/ticket.service';
import{ ActivatedRoute,Router } from '@angular/router';
import{Ticket} from '../../models/ticket.interface';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  tickets : Ticket[];
  userId:number;
    
   
  constructor(
    private TicketService:TicketService, private router: Router,private route: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.TicketService.getUserTickets(this.userId).subscribe((res: Ticket[]) => {
      this.tickets = res;
      console.log(this.tickets)
    }, error => this.handleErrorResponse(error)
    );
  }

  handleErrorResponse(error) {
    console.log('Error getting user tickes ', error);
    console.log('Error getting user tickes ', error.error.message);

  }



  editTicket(ticket: Ticket){
    console.log("Ticket Selected: ", ticket)
    this.router.navigate(['home',this.userId,'ticket',ticket.ticketId]);
  }
}
