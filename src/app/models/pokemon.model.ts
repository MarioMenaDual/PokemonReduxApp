import { Stats } from "./pokemon/pokemon-stats.model";
import { PokemonTypes } from "./pokemon/pokemon-types.model";
/**
 * Información principal de un pokemon
 */
export interface Pokemon{
    /**
     * Identificador del pokemon
     */
    id: number;
    /**
     * Nombre del pokemon
     */
    name : string;
    /**
     * Imagenes del pokemon
     */
    sprites: string[];
    /**
     * Tipos del pokemon
     */
    types: PokemonTypes[];
    /**
     * Estadisticas base del pokemon
     */
    stats: Stats[];
    /**
     * Peso del pokemon
     */
    weight: number;
    /**
     * Altura del pokemon
     */
    height:number;
}