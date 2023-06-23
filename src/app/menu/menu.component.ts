import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  activeIndex: number | null = null;

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  public menuProperties: Array<Menu> =[ 
  {
    id:"1",
    titre:"Tableau de bord",
    icon:"fa-solid fa-chart-simple",
    url:"",
    sousMenu: [
      {
      id: "11",
      titre:"Vue d'ensemble",
      icon:"fa-solid fa-eye",
      url:'',
      },
      {
      id: "12",
      titre:"Statistiques",
      icon:"fa-solid fa-chart-pie",
      url:"statistiques",
      }
    ]
  },
  {
    id: "2",
    titre:"Articles",
    icon:"fa-solid fa-boxes-stacked",
    url:"",
    sousMenu: [
      {
        id: "21",
        titre:"Articles",
        icon:"fa-solid fa-boxes-stacked",
        url:"articles",
        },
        {
          id: "22",
          titre:"Mouvements de stock",
          icon:"fa-solid fa-right-left",
          url:"",
          }
    ]
    },
    {
      id: "3",
      titre:"Clients",
      icon:"fa-solid fa-user",
      url:"",
      sousMenu: [
        {
          id: "31",
          titre:"Clients",
          icon:"fa-regular fa-face-smile",
          url:"",
          },
          {
            id: "32",
            titre:"Commandes clients",
            icon:"fa-solid fa-basket-shopping",
            url:"",
            }
          ]
        },
        {
          id: "4",
          titre:"Fournisseurs",
          icon:"fa-solid fa-people-group",
          url:"",
          sousMenu: [
            {
              id: "41",
              titre:"Fournisseurs",
              icon:"fa-solid fa-user-check",
              url:"",
              },
              {
                id: "42",
                titre:"Commandes fournisseur",
                icon:"fa-solid fa-truck-moving",
                url:"",
                }
              ]
            },
            {
              id: "5",
              titre:"Parametrages",
              icon:"fa-solid fa-gears",
              url:"",
              sousMenu: [
                {
                  id: "51",
                  titre:"Catégories",
                  icon:"fa-solid fa-list-ol",
                  url:"",
                  },
                  {
                    id: "52",
                    titre:"Utilisateurs",
                    icon:"fa-solid fa-user-gear",
                    url:"",
                    }
                  ]
                }
            ];
  constructor(private router: Router){}
  ngOnInit(): void {
    

      
  }
  navigate(url?:string):void {
    this.router.navigate([url])
  }

}
