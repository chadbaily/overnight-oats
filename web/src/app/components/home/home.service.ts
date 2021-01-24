import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getServices() {
    return this.http
      .get('localhost:8000/getServices')
      .pipe(catchError(take(1)));
  }
}
