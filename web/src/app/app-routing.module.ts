import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppleMusicComponent } from './components/apple-music/apple-music.component';
import { HomeComponent } from './components/home/home.component';
import { SpotifyComponent } from './components/spotify/spotify.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'spotify', component: SpotifyComponent },
  { path: 'appleMusic', component: AppleMusicComponent },
  // QOL Paths
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
