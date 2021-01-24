import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { AppleMusicComponent } from './components/apple-music/apple-music.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { homeReducer } from './store/reducers/home.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpotifyComponent,
    AppleMusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ home: homeReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
