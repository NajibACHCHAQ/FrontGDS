import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise/entreprise.service';
import { EntrepriseDto, AdresseDto, UtilisateurDto } from 'src/gs-api/src/models';


@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit{

  constructor(
    private entrepriseService: EntrepriseService
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

    },
      error => {
          this.errorsMsg = error.error.errors;
      });
  }
}
