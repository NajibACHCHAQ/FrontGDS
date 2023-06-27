import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-mvtstk',
  templateUrl: './page-mvtstk.component.html',
  styleUrls: ['./page-mvtstk.component.scss']
})
export class PageMvtstkComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

  toggleAccordion(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }
}