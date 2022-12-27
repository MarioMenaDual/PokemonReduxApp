import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAction } from '../../actions/contador.actions';
import { AppState } from '../../pokemon.model.state';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit{
public contador: number = 0;

  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe( contador => {
        this.contador = contador
      });
    }

  reset(){
    const action = new ResetAction();
    this.store.dispatch(action);
  }
}
