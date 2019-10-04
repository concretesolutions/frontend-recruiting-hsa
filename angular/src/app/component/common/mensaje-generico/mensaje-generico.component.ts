import { Component, Input, DoCheck } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'ang-mensaje-generico',
  templateUrl: './mensaje-generico.component.html',
  styleUrls: ['./mensaje-generico.component.css'],
})
export class MensajeGenericoComponent implements DoCheck {

  /**
   * Recibe:
   * mensaje:string => contiene el mensaje a mostrar
   * tipo:string => contiene el tipo, por defecto muestra error (E: Error, S: Success, W: Warning)
   * addClase:string => listado de clases css a agregar, opcional
   */
  @Input() data: any = null;

  public idElement = 'msj-generic';

  constructor() { }

  ngDoCheck() {

    if (this.data && !isNullOrUndefined(this.data.mensaje) && !isNullOrUndefined(this.data.isScroll)) {

      if (this.data.isScroll) {
        let el = document.getElementById(this.idElement);

        if (el) {
          el.scrollIntoView();
        }
        else {
          window.scroll(0, 0);
        }

        // Queda marcado como procesado
        this.data.isScroll = false;
      }
    }
  }
}
