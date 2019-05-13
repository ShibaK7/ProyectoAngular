import { Injectable } from '@angular/core';
import { Encuentro } from './encuentro';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EncuentrosService {

  private heroesUrl = 'api/ENCUENTROS';

  constructor(private http: HttpClient) { }

  addEnfrentamiento(encuentro: Encuentro): Observable<Encuentro>{
    return this.http.post<Encuentro>(this.heroesUrl, encuentro, httpOptions).pipe(
      catchError(this.handleError<Encuentro>('addEnfrentamiento'))
    )
  }

  getEncuentros(): Observable<Encuentro[]> {
    return this.http.get<Encuentro[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Encuentro[]>('getEncuentros', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
