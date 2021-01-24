import { createAction, props } from '@ngrx/store';
import { MusicService } from 'src/app/app.types';

export const getMusicServices = createAction('[Home] Get music services');
export const loadMusicServices = createAction(
  '[Home] Load music services',
  props<{ payload: MusicService[] }>()
);
