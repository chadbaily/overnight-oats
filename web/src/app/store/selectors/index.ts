import { createSelector } from '@ngrx/store';
import { HomeState } from '../reducers/home.reducer';

export interface AppState {
  home: HomeState;
}

export const selectHomeState = (state: AppState) => state.home;

export const selectHomeServices = createSelector(
  selectHomeState,
  (state: HomeState) => state.services
);
