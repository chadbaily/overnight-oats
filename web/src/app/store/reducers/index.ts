import { createReducer, on } from '@ngrx/store';
import * as appActions from '../actions';

export interface State {
  isLoggedIn: boolean;
}

export const initialState: State = {
  isLoggedIn: true
};

const _appReducer = createReducer(
  initialState,
  on(appActions.logout, state => ({ ...state, isLoggedIn: false }))
);

export function appReducer(state, action) {
  return _appReducer(state, action);
}

// This is the example I used
// export const initialState = 0;

// const _counterReducer = createReducer(initialState,
//   on(counterActions.increment, state => state + 1),
//   on(counterActions.decrement, state => state - 1),
//   on(counterActions.reset, state => 0),
// );

// export function counterReducer(state, action) {
//   return _counterReducer(state, action);
// }
