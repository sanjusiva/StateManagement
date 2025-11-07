import { createReducer, on } from '@ngrx/store';
import * as DetailsActions from './lookup.action';

export const initialState = {};

export const detailsReducer = createReducer(
  initialState,
  on(DetailsActions.setDetailsLookup, (state, data) => {
    return data;
  }),
  on(DetailsActions.resetDetailsLookup, () => ({}))
);
