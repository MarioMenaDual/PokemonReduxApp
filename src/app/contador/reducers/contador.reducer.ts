import { ActionsConstants } from "src/app/ActionConstants";
import { actions } from "../actions/contador.actions";
/**
 * Reducer del contador
 */
export function contadorReducer(state: number = 1, action: actions){
    switch(action.type){
        case ActionsConstants.Incrementar:
            return state + 1;
        case ActionsConstants.Decrementar:
            return state - 1;
        case ActionsConstants.Multiplicar:
            return state * action.payload;
        case ActionsConstants.Dividir:
            return state / action.payload;
        case ActionsConstants.Reset:
            return state = 1;
    

            default:
                return state;
    }
}