import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from '../actions/home.actions';
import { MusicService } from '../../app.types';

const _services: MusicService[] = [
  {
    displayName: "Spotify",
    serviceName: "spotify",
    serviceText: "Here is some info about Spotify!!"
  },
  {
    displayName: "Apple Music",
    serviceName: "appleMusic",
    serviceText: "Here is some info about Apple Music!!!"
  }
]

export const initialState: HomeState = {
  services: _services
};

export interface HomeState {
  services: MusicService[]
}

const _homeReducer = createReducer(
  initialState,
  on(HomeActions.getMusicServices, (state) => ({
    ...state,
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action) {
  return _homeReducer(state, action);
}
