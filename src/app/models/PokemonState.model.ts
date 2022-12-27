import { Pokemon } from "./pokemon.model";
/**
 * Estado para el pokemon
 */
export interface PokemonState {
  /**
   * Ícono personalizado
   */
  pokemon : Pokemon;
  isLoading: boolean;
}

/**
* Estado inicial
*/
export const initialStatePokemon: PokemonState = {
  pokemon : {id: 1,
  name:"",
  sprites:[],
  types:[ ],
  stats:[],
  weight:0,
  height:0
  },
  isLoading:false
};