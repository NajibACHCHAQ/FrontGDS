import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleAccordion(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }

  nouvelleCommande():void{
    this.router.navigate(["nouvellecommandeclient"])
  }
}


