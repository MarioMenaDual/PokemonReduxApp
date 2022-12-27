import { Action } from "@ngrx/store";
import { ActionsConstants } from "src/app/ActionConstants";
/**
 * Acción que realiza un incremento en el contador.
 */
export class IncrementarAction implements Action {
    /**
     * Tipo de acción.
     */
    readonly type = ActionsConstants.Incrementar;
}

/**
 * Acción que realiza un decremento en el contador.
 */
export class DecrementarAction implements Action {
    /**
     * Tipo de acción.
     */
    readonly type = ActionsConstants.Decrementar;
}

/**
 * Acción que realiza una multiplicación en el contador.
 */
export class MultiplicarAction implements Action {
    /**
     * Tipo de acción.
     */
    readonly type = ActionsConstants.Multiplicar;

    /**
     * Metodo constructor
     * @param payload numero a multiplicar.
     */
    constructor(public payload: number ){}
}

/**
 * Acción que realiza una multiplicación en el contador.
 */
export class DividirAction implements Action {
    /**
     * Tipo de acción.
     */
    readonly type = ActionsConstants.Dividir;
    /**
     * Metodo constructor
     * @param payload numero a dividir
     */
    constructor(public payload: number ){}
}

/**
 * Acción que realiza un reseteo en el contador.
 */
export class ResetAction implements Action {
    /**
     * Tipo de acción.
     */
    readonly type = ActionsConstants.Reset;
}

/**
 * Acciones de este reducer
 */
export type actions = IncrementarAction | DecrementarAction | MultiplicarAction |DividirAction | ResetAction;