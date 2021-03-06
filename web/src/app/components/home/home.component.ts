import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MusicService } from '../../app.types';
import { getMusicServices } from 'src/app/store/actions/home.actions';
import { AppState, selectHomeState } from 'src/app/store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  $componentState = this.store.select((state) => {
    return selectHomeState(state);
  });

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(getMusicServices());
  }

  routeService(service: MusicService): void {
    console.log(`Navigate to ${service.serviceName}`);
    this.router.navigateByUrl(`/${service.serviceName}`);
  }

  // onSubmit(username: string, password: string) {
  //   store.dispatch(login({ username: username, password: password }));
  // }
}
