import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit{


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
    if(this.origin ==='client')
    {
      this.router.navigate(['commandeclient'])
    }
    else if(this.origin ==='fournisseur')
    {
      this.router.navigate(['commandefournisseur'])
    }
  }

}
