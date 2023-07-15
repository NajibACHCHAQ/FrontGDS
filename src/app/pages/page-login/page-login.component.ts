import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationRequest, AuthenticationResponse } from 'src/gs-api/src/models';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent  implements OnInit{

  authenticationRequest: AuthenticationRequest ={};
  errorMessage = '';

  constructor(
    private userService : UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }
  login(){
    this.userService.login(this.authenticationRequest).subscribe((data: AuthenticationResponse) => {
      localStorage.setItem('authenticationResponse', JSON.stringify(data));
    }, (error) => {
      this.errorMessage = error.error.message;
    });
  }


}
