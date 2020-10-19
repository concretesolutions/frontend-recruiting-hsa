import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { ActivatedRoute, Router } from "@angular/router";
import { User } from '../models/usuario';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  repos:any;
  usuario:User = new User;
  avatar:any;
  datos:any;


  constructor(public servicio: ServicioService,public route: ActivatedRoute,private router: Router) { }
  
  ngOnInit(): void {
    this.usuario.nombre=this.route.snapshot.paramMap.get("user")
    
    this.servicio.obtenerUsuario(this.usuario.nombre).subscribe(x => this.validarDatos(x), e => this.router.navigate(['/not-found']));
  }

  validarDatos(data){
    this.datos=data
    this.usuario.avatar_url = this.datos.avatar_url;
    this.usuario.login = this.datos.login;
    this.servicio.obtenerRepos(this.usuario.nombre).subscribe(x => this.cargarRepos(x), e => this.router.navigate(['/not-found']));
  }

  cargarRepos(data){
    this.usuario.repos = data;
  }

}
