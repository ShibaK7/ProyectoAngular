import { Injectable } from '@angular/core';
import { ResultadoI } from './resultadosI';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultadoIService {

  private heroesUrl = 'api/INDIVIDUALES';
  private individuales: ResultadoI[] = [];
  private generos: string[] = [];

  constructor(private http: HttpClient) {
    this.http.get<ResultadoI[]>(this.heroesUrl).subscribe(data => {
      this.individuales = data;
      this.generos = data.map(p => p.genero)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getJugadores(): Observable<ResultadoI[]> {
    return this.http.get<ResultadoI[]>(this.heroesUrl).pipe(
      catchError(this.handleError<ResultadoI[]>('getJugadores', []))
    );
  }

  getJugador(id: number): Observable<ResultadoI> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<ResultadoI>(url).pipe(
      catchError(this.handleError<ResultadoI>(`getJugador id=${id}`))
    );
  }

  searchJugadores(term: string): Observable<ResultadoI[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<ResultadoI[]>(`${this.heroesUrl}/?torneo=${term}`).pipe(
      catchError(this.handleError<ResultadoI[]>('searchJugadores', []))
    );
  }

  getGeneros(): string[] {
    return this.generos;
  }

  private handleError<T>(operation = 'operation', result?: T) {
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
