import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * Interfaz del efecto
 */
export interface EffectExecute {
    /**
     * Método para ejecutar el efecto
     */
    execute(): Observable<Action>;
}