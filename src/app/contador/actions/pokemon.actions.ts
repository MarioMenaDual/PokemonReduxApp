import { Action } from "@ngrx/store";
import { ActionsConstants } from "src/app/ActionConstants";
import { Pokemon } from "src/app/models/pokemon.model";

/**
 * Acción que retorna un objeto con la información del pokemon.
 */
export class SuccessPokemonAction implements Action {
    /**
     * Tipo de acción
     */
    readonly type = ActionsConstants.SuccessPokemon;
    /**
     * Constructor
     * @param payload Datos de un pokemón.
     */
    public constructor(public payload : Pokemon){

  } 
}
/**
 * Acción que retorna la información de un pokemón utilizando su identificador.
 */
export class GetPokemonInfoAction implements Action {
     /**
     * Tipo de acción
     */
    readonly type = ActionsConstants.GetPokemonAction;
    /**
     * Constructor
     * @param pokemonId Identificador del pokemón.
     */
    constructor(public pokemonId: number) {}
  }

/**
 * Acciones de este reducer
 */
export type actions = SuccessPokemonAction | GetPokemonInfoAction;