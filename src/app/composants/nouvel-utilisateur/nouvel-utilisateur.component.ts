import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent implements OnInit{

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

    origin ="";

  ngOnInit() {
    this.activateRoute.data.subscribe(data => {
      this.origin = data['origin'];
    })
  }

  cancelClick():void{
  
      this.router.navigate(['utilisateurs'])
    }
}
