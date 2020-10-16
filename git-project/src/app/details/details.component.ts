import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  usuario:string;
  constructor(public servicio: ServicioService,public route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.usuario=this.route.snapshot.paramMap.get("user")
    this.servicio.obtenerUsuario(this.usuario).subscribe(data => (console.log(data)));

  }

}
