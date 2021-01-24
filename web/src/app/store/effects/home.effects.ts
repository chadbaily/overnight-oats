import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { MusicService } from 'src/app/app.types';
import { getMusicServices, loadMusicServices } from '../actions/home.actions';
import { AppState } from '../selectors';

@Injectable()
export class HomeEffects {
  login$ = createEffect(() =>
    this.actions.pipe(
      ofType(getMusicServices),
      tap(() => console.log('in the effect')),
      mergeMap(() =>
        this.appService.getServices().pipe(
          map((payload) => loadMusicServices({ payload })),
          catchError((error) => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions: Actions,
    private appService: AppService,
    private store: Store<AppState>
  ) {}
}
