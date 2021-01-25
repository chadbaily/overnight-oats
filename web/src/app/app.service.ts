import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { MusicService } from './app.types';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  /**
   * Handles the errors that could be thrown by a middle tier
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  getServices(): Observable<MusicService[] | any> {
    console.log('in the app service');
    // return of([
    //   {
    //     displayName: 'Spotify',
    //     serviceName: 'spotify',
    //     serviceText: 'Here is some info about Spotify!!',
    //   },
    //   {
    //     displayName: 'Apple Music',
    //     serviceName: 'appleMusic',
    //     serviceText: 'Here is some info about Apple Music!!!',
    //   },
    // ]);
    return this.http
      .get('http://localhost:8080/api/musicServices')
      .pipe(catchError(this.handleError));
  }
  constructor(private http: HttpClient) {}
}
