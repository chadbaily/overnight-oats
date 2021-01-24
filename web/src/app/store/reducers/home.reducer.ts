import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from '../actions/home.actions';
import { MusicService } from '../../../../../shared/app.types';
import { state } from '@angular/animations';

const _services: MusicService[] = [
  {
    displayName: 'Spotify',
    serviceName: 'spotify',
    serviceText: 'Here is some info about Spotify!!',
  },
  {
    displayName: 'Apple Music',
    serviceName: 'appleMusic',
    serviceText: 'Here is some info about Apple Music!!!',
  },
];

export const initialState: HomeState = {
  services: [],
};

export interface HomeState {
  services: MusicService[];
}

const _homeReducer = createReducer(
  initialState,
  on(HomeActions.getMusicServices, (state) => ({
    ...state,
  })),
  on(HomeActions.loadMusicServices, (state, { payload }) => ({
    ...state,
    services: payload,
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action) {
  return _homeReducer(state, action);
}
