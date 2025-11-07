import { createAction, props } from "@ngrx/store";

export const setDetailsLookup=createAction('setDetails lookup value',props<any>())
export const resetDetailsLookup=createAction('resetDetails lookup value')