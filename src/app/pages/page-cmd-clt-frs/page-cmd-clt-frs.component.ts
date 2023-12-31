import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent implements OnInit{
  mvtstk: any[] = [
    {
      title: 'Accordeon 1',
      details: ['Détail 1', 'Détail 2', 'Détail 3']
    },
    {
      title: 'Accordeon 2',
      details: ['Détail 4', 'Détail 5', 'Détail 6']
    },
    {
      title: 'Accordeon 3',
      details: ['Détail 7', 'Détail 8', 'Détail 9']
    },
    {
      title: 'Accordeon 1',
      details: ['Détail 1', 'Détail 2', 'Détail 3', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3']
    },
    {
      title: 'Accordeon 2',
      details: ['Détail 4', 'Détail 5', 'Détail 6', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3']
    },
    {
      title: 'Accordeon 3',
      details: ['Détail 7', 'Détail 8', 'Détail 9', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3']
    },
    {
      title: 'Accordeon 1',
      details: ['Détail 1', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3']
    },
    {
      title: 'Accordeon 2',
      details: ['Détail 4', 'Détail 5', 'Détail 6', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3']
    },
    {
      title: 'Accordeon 3',
      details: ['Détail 7', 'Détail 8', 'Détail 9', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3']
    },
    {
      title: 'Accordeon 1',
      details: ['Détail 1', 'Détail 2', 'Détail 3', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3']
    },
    {
      title: 'Accordeon 2',
      details: ['Détail 4', 'Détail 5', 'Détail 6', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3']
    },
    {
      title: 'Accordeon 3',
      details: ['Détail 7', 'Détail 8', 'Détail 9', 'Détail 2', 'Détail 3','Détail 1', 'Détail 2', 'Détail 3']
    }
  ];
  activeIndex: number = -1;

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

  toggleAccordion(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }

  nouvelleCommande():void{

    if (this.origin === "client"){
      this.router.navigate(["nouvellecommandeclient"])
    }
    else if (this.origin === "fournisseur"){
      this.router.navigate(["nouvellecommandefournisseur"])
    }
    
  }


  cancelClick():void{
    if(this.origin ==='client')
    {
      this.router.navigate(['clients'])
    }
    else if(this.origin ==='fournisseur')
    {
      this.router.navigate(['fournisseurs'])
    }
  }
}


