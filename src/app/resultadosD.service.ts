import { Injectable } from '@angular/core';
import { ResultadoD } from './resultadoD';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultadoDService {

  private heroesUrl = 'api/DOBLES';
  private dobles: ResultadoD[] = [];
  private generos: string[] = [];
  private torneos: string[] = [];

  constructor(private http: HttpClient) {
    this.http.get<ResultadoD[]>(this.heroesUrl).subscribe(data => {
      this.dobles = data;
      this.generos = data.map(p => p.genero)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
        this.torneos = data.map(p => p.torneo)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getJugadores(): Observable<ResultadoD[]> {
    return this.http.get<ResultadoD[]>(this.heroesUrl).pipe(
      catchError(this.handleError<ResultadoD[]>('getJugadores', []))
    );
  }

  getJugador(id: number): Observable<ResultadoD> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<ResultadoD>(url).pipe(
      catchError(this.handleError<ResultadoD>(`getJugador id=${id}`))
    );
  }

  searchJugadoresD(term: string): Observable<ResultadoD[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<ResultadoD[]>(`${this.heroesUrl}/?nombre=${term}`).pipe(
      catchError(this.handleError<ResultadoD[]>('searchJugadoresD', []))
    );
  }

  getGeneros(): string[] {
    return this.generos;
  }

  getTorneos(): string[]
  {
    return this.torneos;
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
