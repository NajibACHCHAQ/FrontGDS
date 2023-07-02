import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit{

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
  
      this.router.navigate(['articles'])
    }



}
