import { PokemonIcons } from "./pokemontype.enum";

/**
 * Enum que contiene los tipos de pokemon.
 */
export enum PokemonStats {
  /**
   * Indica los puntos de salud.
   */
  Hp = "hp",
  /**
   * Indica el ataque
   */
  Attack = "attack",
  /**
   * Indica los puntos de defensa
   */
  Defense = "defense",
  /**
   * Indica los puntos de ataque special
   */
  SpecialAtack= 'special-attack',
  /**
   * Indica los puntos de defensa especial
   */
  SpecialDefense= 'special-defense',
  /**
   * Indica los puntos de velocidad
   */
  Speed = 'speed'
}
  /**
   * Obtiene la traducción correspondiente al nombre del tipo.
   */
  export const GetPokemonTraduction = new Map<string, string>
  ([
    [PokemonIcons.Fire,'Fuego'],
    [PokemonIcons.Bug,'Bicho'],
   [PokemonIcons.Flying,'Volador'],
   [PokemonIcons.Poison,'Veneno'],
   [PokemonIcons.Water,'Agua'],
   [PokemonIcons.Grass,'Planta'],
   [PokemonIcons.Normal,'Normal'],
   [PokemonIcons.Dragon,'Dragon'],
   [PokemonIcons.Electric,'Electrico'],
   [PokemonIcons.Fairy,'Hada'],
   [PokemonIcons.Fighting,'Lucha'],
   [PokemonIcons.Ghost,'Fantasma'],
   [PokemonIcons.Ground,'Tierra'],
   [PokemonIcons.Ice,'Hielo'],
   [PokemonIcons.Psychic,'Psiquico'],
   [PokemonIcons.Rock,'Roca'],
   [PokemonIcons.Steel,'Acero'],
   [PokemonIcons.Dark,'Siniestro'],
   [PokemonStats.Hp,'Vida'],
   [PokemonStats.Attack,'Ataque'],
   [PokemonStats.Defense,'Defensa'],
   [PokemonStats.SpecialAtack,'Ataque Especial'],
   [PokemonStats.SpecialDefense,'Defensa Especial'],
   [PokemonStats.Speed,'Velocidad']


]);