import { createAction, props } from '@ngrx/store';
import { MusicService } from '../../../../../shared/app.types';

export const getMusicServices = createAction('[Home] Get music services');
export const loadMusicServices = createAction(
  '[Home] Load music services',
  props<{ payload: MusicService[] }>()
);
