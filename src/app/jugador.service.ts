import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Jugador } from './jugador';

@Injectable({ providedIn: 'root' })
export class JugadorService {

  private heroesUrl = 'api/JUGADORES';
  private paisesJugadores: string[] = [];
  private jugadores: Jugador[] = [];

  constructor (private http: HttpClient) {  
    this.http.get<Jugador[]>(this.heroesUrl).subscribe(data => {
      this.jugadores = data;
      this.paisesJugadores = data.map(p => p.nacionalidad)
      .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getJugadores (): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Jugador[]>('getJugadores', []))
    );
  }

  getJugador(id: number): Observable<Jugador> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Jugador>(url).pipe(
      catchError(this.handleError<Jugador>(`getJugador id=${id}`))
    );
  }

  searchJugadores(term: string): Observable<Jugador[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Jugador[]>(`${this.heroesUrl}/?nombre=${term}`).pipe(
      catchError(this.handleError<Jugador[]>('searchJugadores', []))
    );
  }

  getPaisesJugadores(): string[] {
    return this.paisesJugadores;
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
