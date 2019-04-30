import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Torneo } from './Torneos-Record';

@Injectable({
  providedIn: 'root'
})
export class TorneosRecordService {

  private torneoUrl = 'api/TORNEOS';
  private torneoss: Torneo[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Torneo[]>(this.torneoUrl).subscribe(data => {
      this.torneoss = data;
    });
   }



   getTorneos (): Observable<Torneo[]> {
    return this.http.get<Torneo[]>(this.torneoUrl).pipe(
      catchError(this.handleError<Torneo[]>('getTorneos', []))
    );
  }

  getTorneo(id: number): Observable<Torneo> {
    const url = `${this.torneoUrl}/${id}`;
    return this.http.get<Torneo>(url).pipe(
      catchError(this.handleError<Torneo>(`getTorneo id=${id}`))
    );
  }

  searchTorneo(term: string): Observable<Torneo[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Torneo[]>(`${this.torneoUrl}/?nombre=${term}`).pipe(
      catchError(this.handleError<Torneo[]>('searchTorneo', []))
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
