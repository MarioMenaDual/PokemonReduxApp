import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DividirAction, MultiplicarAction } from '../../actions/contador.actions';
import { AppState } from '../../pokemon.model.state';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit{
public contador: number = 0;

  constructor(private store: Store<AppState>){
   
  }
  ngOnInit(): void {
    this.store.select('contador')
      .subscribe( contador => {
        this.contador = contador
      });
    }

  multiplicar(){
const action = new MultiplicarAction(5);
this.store.dispatch(action);
 //   this.cambioContador .emit(this.contador);
  }

  dividir(){
    const action = new DividirAction(2);
    this.store.dispatch(action);
 //   this.cambioContador .emit(this.contador);
  }

  resetNieto(nuevo : number){
    this.contador = nuevo;
 //   this.cambioContador.emit(this.contador);
  }
}
