import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit{

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

}
