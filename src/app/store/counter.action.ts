import { createAction } from "@ngrx/store";

export const increment=createAction('counter increased')
export const decrement=createAction('counter decreased')
export const reset=createAction('counter reset')