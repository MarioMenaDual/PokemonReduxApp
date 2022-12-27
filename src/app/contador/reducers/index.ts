import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../pokemon.model.state";
import { contadorReducer } from "./contador.reducer";
import { pokemonReducer } from "./pokemon.reducer";


/**
 * Reducer para el módulo de pokemon
 */
export const reducers: ActionReducerMap<AppState,any> = {
    contador : contadorReducer,
    pokemonState : pokemonReducer
};
