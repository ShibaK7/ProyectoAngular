import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Jugadora } from './jugadora';

@Injectable({ providedIn: 'root' })
export class JugadoraService {

  private heroesUrl = 'api/JUGADORAS';
  private paisesJugadoras: string[] = [];
  private jugadoras: Jugadora[] = [];

  constructor (private http: HttpClient) {  
    this.http.get<Jugadora[]>(this.heroesUrl).subscribe(data => {
      this.jugadoras = data;
      this.paisesJugadoras = data.map(p => p.nacionalidad)
      .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getJugadoras (): Observable<Jugadora[]> {
    return this.http.get<Jugadora[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Jugadora[]>('getJugadoras', []))
    );
  }

  getJugadora(id: number): Observable<Jugadora> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Jugadora>(url).pipe(
      catchError(this.handleError<Jugadora>(`getJugadora id=${id}`))
    );
  }

  searchJugadoras(term: string): Observable<Jugadora[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Jugadora[]>(`${this.heroesUrl}/?nombre=${term}`).pipe(
      catchError(this.handleError<Jugadora[]>('searchJugadoras', []))
    );
  }

  getPaisesJugadoras(): string[] {
    return this.paisesJugadoras;
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
