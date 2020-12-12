import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GitService } from '../../services/git.service';
import { User } from '../../models/user.model';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  findControl = new FormControl();
  data: string = "";
  error: boolean = false;
  user: User = null;

  constructor(private gitService: GitService) { }
  
  ngOnInit() {}
  
  //Esta funcion se dispara al precionar el boton y 
  //llama al servicio que se encarga de obtener los usuarios
  search(e) {
    e.preventDefault()
    console.log(this.data)
    // Resive un string y devuelve los datos de los usuarios que coincidan con el string
    this.gitService.getUser(this.data).pipe(
          catchError(err => {
            this.user = null;
            this.error = true;
            return EMPTY;
          })).subscribe(user => {
        this.user = user;
        this.error = false;
      })
  }

}
