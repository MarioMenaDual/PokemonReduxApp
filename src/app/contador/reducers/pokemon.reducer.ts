import { ActionsConstants } from "src/app/ActionConstants";
import { initialStatePokemon, PokemonState } from "src/app/models/PokemonState.model";
import { actions } from "../actions/pokemon.actions";
/**
 * Reducer que se encargará de los cambios en el estado del pokemon.
 * @param state Estado de la aplicación.
 * @param action Acción que se realizó.
 */
export function pokemonReducer(state: PokemonState | undefined = initialStatePokemon, action: actions){
    switch(action.type){
        case ActionsConstants.SuccessPokemon:
            return {
                pokemon:{
                    id:action.payload.id,
                    name:action.payload.name,
                    sprites:action.payload.sprites,
                    types:action.payload.types,
                    stats: action.payload.stats,
                    weight: action.payload.weight,
                    height: action.payload.height
                },
                isLoading:false
            } 
            default:
                return {...state, isLoading:true};
    
    }
}