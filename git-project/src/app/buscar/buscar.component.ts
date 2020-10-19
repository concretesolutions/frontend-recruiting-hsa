import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  usuario:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscar(){
    this.router.navigate(['/details/'+this.usuario])
  }
}
