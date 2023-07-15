import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { UserService } from 'src/app/services/user/user.service';
import { EntrepriseDto, AdresseDto, UtilisateurDto, AuthenticationRequest } from 'src/gs-api/src/models';


@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit{

  constructor(
    private entrepriseService: EntrepriseService,
    private userService: UserService,
    private router:Router
  ){}

  entrepriseDto: EntrepriseDto = {};
  adresseDto: AdresseDto = {};
  utilisateurDto: UtilisateurDto = {};

  errorsMsg: Array<string> = [];

  ngOnInit(): void {
    
  }

  inscrire(): void{
    this.entrepriseDto.adresse = this.adresseDto;
    this.entrepriseService.sinscrire(this.entrepriseDto)
    .subscribe(entrepriseDto =>{
      this.connectEntreprise();
    },
      error => {
          this.errorsMsg = error.error.errors;
      });
  }

  connectEntreprise(): void{
    const authenticationRequest: AuthenticationRequest = {
      login : this.entrepriseDto.email,
      password:'son3R@nd0mP@$$word'
    }
    this.userService.login(authenticationRequest)
    .subscribe(response => {
      this.userService.setConnectedUser(response);
      this.router.navigate(['changermotdepasse']);
    });
  }
}
