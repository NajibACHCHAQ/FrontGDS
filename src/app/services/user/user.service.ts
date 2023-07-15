import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationRequest, AuthenticationResponse } from 'src/gs-api/src/models';
import { AuthenticationService } from 'src/gs-api/src/services';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private router : Router
    
  ){}
  
  login(authenticationRequest: AuthenticationRequest):Observable <AuthenticationResponse>{
    return this.authenticationService.authenticate(authenticationRequest)
  
  }
  
  setConnectedUser(authenticationResponse: AuthenticationResponse):void{
    localStorage.setItem('connectedUser', JSON.stringify(authenticationResponse));
  }

  isUserLoggedAndAccessTokenValid(): boolean{
    if(localStorage.getItem('connectedUser')){
      //TODO vérifier accesstoken
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }
  }

