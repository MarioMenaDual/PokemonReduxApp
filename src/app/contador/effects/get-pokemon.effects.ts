import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { debounceTime, Observable, switchMap } from "rxjs";
import { ActionsConstants } from "src/app/ActionConstants";
import { PokemonService } from "src/app/service/pokemon.service";
import { GetPokemonInfoAction, SuccessPokemonAction } from "../actions/pokemon.actions";
/**
 * Efecto que se ejecuta para obtener los datos de un pokemon por su identificador.
 */
@Injectable()
 export class GetPkemonInfoEffect {

   /**
   * Constructor de la clase.
   * @param _actions$ Acciones.
   * @param _pokemonService Servicio que realiza el llamado a los endpoints de pokemon API.
   */
     constructor(
         private _actions$: Actions,
         private _pokemonService: PokemonService,
     ) { }

     /**
      * Se crea el efecto
      */
     observable$ = createEffect(() => this.execute());

     /**
    * Método que ejecuta el efecto
    */
    execute(): Observable<Action> {
        return this._actions$
            .pipe(
                ofType<GetPokemonInfoAction>(ActionsConstants.GetPokemonAction),
                debounceTime(500),
                switchMap((action) => this._pokemonService.getPokemonById(action.pokemonId)
                    .pipe(
                        switchMap(response => {                      
                            return [                         
                               new SuccessPokemonAction(response),                            
                            ]
                        })
                    ))
            );
    }
    
    }