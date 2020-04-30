import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: number;
  url : string;


  constructor(private loginService:AuthenticationService){ }
  ngOnInit() {
    this.userId = this.loginService.getLoggedUser();

    this.url = `/home/${this.userId}/ticket/1`;

  }

}


