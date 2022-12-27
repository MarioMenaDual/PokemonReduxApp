import { PokemonState } from "../models/PokemonState.model";

/**
 * Estado de la aplicación
 */
export interface AppState{
    contador : number,
    pokemonState:  PokemonState;
}