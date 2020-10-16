import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  usuario:string;
  repos:any;
  constructor(public servicio: ServicioService,public route: ActivatedRoute,private router: Router) { }
  
  ngOnInit(): void {
    this.usuario=this.route.snapshot.paramMap.get("user")
    this.servicio.obtenerUsuario(this.usuario).subscribe(data => (console.log(data)));
    this.servicio.obtenerRepos(this.usuario).subscribe(data => (console.log(data)));
  }

  buscar(){
    this.router.navigate(['/details/'+this.usuario])
  }

}
