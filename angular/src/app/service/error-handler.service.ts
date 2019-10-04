import { Injectable, ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { StatusResponseModel } from '../model/status-response.model';

// Mensajes por defecto
const ERROR_DEFAULT = 'Error mientras se procesaba la solicitud';


@Injectable({
    providedIn: 'root'
  })
export class ErrorHandlerService implements ErrorHandler {

    constructor() {}

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     */
    public handleError<T> (operation = 'operation') {
        return (error: any): Observable<T> => {

            const mensaje = !isNullOrUndefined(error.error.message) ? error.error.message :
                (!isNullOrUndefined(error.message) ? error.message : error.statusText);

            const nivel = !isNullOrUndefined(error.error.nivel) ? error.error.nivel:
                (!isNullOrUndefined(error.nivel) ? error.nivel : null);

            // Let the app keep running by returning an empty result.
            return throwError(this.loadDataError(operation, error, mensaje, nivel));
        };
    }

    /**
     * Muestra los datos en consola y carga el objeto a retornar
     *
     * @param operation
     * @param error
     * @param mensaje
     * @param nivel
     */
    private loadDataError(operation: string, error: any, mensaje: string, nivel: number) {
        let objError = new StatusResponseModel();

        // TODO: send the error to remote logging infrastructure
        objError.estado = error.status;

        objError.mensaje = mensaje ? ('Error: ' + mensaje) : ERROR_DEFAULT;

        return objError;
    }
}
