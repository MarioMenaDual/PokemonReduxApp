import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendBaseService } from './base/baseService';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicios de pokemon API.
 */
export class PokemonService extends BackendBaseService{
/**
 *Metodo constructor de la clase
 */
  constructor(private http: HttpClient) {
    super();
   }

   /**
    * Metodo para obtener un pokemon a traves de su identificador.
    * @param id Identificador del pokemon.
    * Observable del pokemon.
    */
   getPokemonById(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}`+`${id}`);
}

}
