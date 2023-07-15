import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationRequest, AuthenticationResponse } from 'src/gs-api/src/models';
import { AuthenticationService } from 'src/gs-api/src/services';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService
    
  ){}
  
  login(authenticationRequest: AuthenticationRequest):Observable <AuthenticationResponse>{
    return this.authenticationService.authenticate(authenticationRequest)
  
  }
    
  }

