import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Ticket }    from '../models/ticket.interface';


  @Injectable({
    providedIn: 'root'
  })
  export class TicketService {
    constructor(
      private httpClient:HttpClient
    ) { 
       }
  

  getAllTickets(){
    return this.httpClient.get(`http://localhost:8080/tickets`);
  }


  getTicket(id: number){
    return this.httpClient.get(`http://localhost:8080/tickets/${id}`);
  }


  getUserTickets(userId:number){
    return this.httpClient.get(`http://localhost:8080/users/${userId}/tickets`)
  }

  public createTicket(ticket:Ticket,userId :number) {
    console.log("xajjac"+JSON.stringify(ticket))
    return this.httpClient.post<Ticket>(`http://localhost:8080/tickets/${userId}` ,ticket);
  }
  }