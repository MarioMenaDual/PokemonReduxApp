import { Action } from "@ngrx/store";

/**
 * Enumerador de constantes de acciones de operaciones
 */
export enum ActionsConstants {

    //Acciones del contador
    Incrementar = '[Contador] Incrementar Action',
    Decrementar = '[Contador] Decrementar Action',
    Multiplicar = '[Contador] Multiplicar Action',
    Dividir = '[Contador] Dividir Action',
    Reset = '[Contador] Resetear Action',

     //Acciones de pokemon
     SuccessPokemon = '[Pokemon] Success Get Pokemon Action',
     GetPokemonAction = '[Pokemon] Get Pokemon Action',
     
}