import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationRequest } from 'src/gs-api/src/models';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent  implements OnInit{

  authenticationRequest: AuthenticationRequest ={};

  constructor(
    private userService : UserService
  ){}

  ngOnInit(): void {
    
  }
  login(){
    this.userService.login(this.authenticationRequest);
  }


}
