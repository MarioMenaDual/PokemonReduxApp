import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DecrementarAction, IncrementarAction, ResetAction } from './contador/actions/contador.actions';
import { GetPokemonInfoAction } from './contador/actions/pokemon.actions';
import { GetPokemonType } from '../assets/enums/pokemontype.enum';
import { GetPokemonTraduction } from '../assets/enums/translatePokemonType.enum';
import { AppState } from './contador/pokemon.model.state';
import { Pokemon } from './models/pokemon.model';
import { PokemonSound } from 'src/assets/enums/audio-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/**
 * Clase del componente principal.
 */
export class AppComponent implements OnInit{

/**
 * Intancia de un pokemon
 */
 public pokemon : Pokemon | any = [];

/**
 * Enumerable de sonidos pokemon
 */
public pokemonSound = PokemonSound;

/**
 * Almacena el valor del contador
 */
  contador: number = 0;
  
/**
* Indica si esta cargando el pokemon.
*/
  public isLoading$: Observable<boolean>;

/**
 * Observable del pokemon
 */
  public pokemon$: Observable<Pokemon>;

/**
* Enumerable de tipos de pokemon.
*/
  pokemonTypeSvg = GetPokemonType;

/**
* Enumerable con la traducción de los tipos de pokemon.
*/
pokemonTraduction = GetPokemonTraduction;

/**
* Indica si el pokemon es shiny
*/
isShiny:boolean = false;

/**
 * Metodo constructor de la clase
 * @param store Almacen del estado de la aplicación.
 * @param sanitizer Sanitiza un valor para usarlo dentro de un contexto de seguridad.
 */
  constructor(private store: Store<AppState>,private sanitizer:DomSanitizer){
    this.store.select('contador').subscribe
    (contador => this.contador = contador);

    this.store.select('pokemonState').subscribe
    (pokemonState => this.pokemon = pokemonState.pokemon);

    this.isLoading$ = store
      .select(state => state.pokemonState.isLoading);

    this.pokemon$ = store
    .select(state => state.pokemonState.pokemon);

  }

/**
   * Función que se ejecuta cuando se inicia el componente
   */
  ngOnInit(): void {
    if (this.contador != null) {
      this.store.dispatch(new GetPokemonInfoAction(this.contador));
    }
  }

  //Metodo para decrementar el contador
  incrementar(){
  this.playButton();
  this.store.dispatch(new IncrementarAction());
  this.store.dispatch(new GetPokemonInfoAction(this.contador));
  }

  //Metodo para incrementar el contador
  decrementar(){
    this.playButton();
    if(this.contador > 1){
    this.store.dispatch(new DecrementarAction());
    this.store.dispatch(new GetPokemonInfoAction(this.contador));}
    }
  
  //Metodo para resetear el contador
  reset(){
  this.store.dispatch(new ResetAction());
  this.store.dispatch(new GetPokemonInfoAction(this.contador));}
  
  //Metodo para cambiar el color de fondo de un pokemon segun su tipo.
  getPokemonDisplay(pokemon: Pokemon){
    const type = pokemon.types[0]?.type.name;
  if(type!=null){
  return type.toString()
  }
  return 'hide';
  }

  //Metodo para reproducir el sonido de un botón.
  playButton(){
   let buttonSound = new Audio();
   buttonSound.src = this.pokemonSound.ButtonB;
   buttonSound.play();
  }

  //Metodo para reproducir el sonido de un pokemon
  playPokemonCry(){
    let soundCry = new Audio();
    soundCry.src = this.pokemonSound.CryPokemon;
    soundCry.play();
  }

  //Metodo para obtener un svg del tipo de pokemon
  sanitizeSvg(pokemon:string){
  let svg = this.sanitizer.bypassSecurityTrustHtml(`${this.pokemonTypeSvg.get(pokemon)}`);
   return svg;
  }

  // Metodo para obtener una vista del pokemon en su forma shiny
  getViewShiny(isTrue:boolean){
    this.playPokemonCry();
    this.isShiny = isTrue;
  }

  // Metodo para obtener el porcentaje del progress bar
  getStats(numberStat:number){
    let response = Math.round(numberStat*0.418);
    return response
  }

  }
