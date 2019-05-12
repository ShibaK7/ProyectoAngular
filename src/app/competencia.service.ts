import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Competencia } from './competencia';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  private competenciaUrl = 'api/COMPETENCIAS';
  private torneosCompetencia: string[] = [];
  private competencias: Competencia[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Competencia[]>(this.competenciaUrl).subscribe(data => {
      this.competencias = data;
      this.torneosCompetencia = data.map(t => t.torneo)
      .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
   }

   getCompetencias (): Observable<Competencia[]> {
     return this.http.get<Competencia[]>(this.competenciaUrl).pipe(
       catchError(this.handleError<Competencia[]>('getCompetencias', []))
     );
   }

   getCompetencia (id: number): Observable<Competencia> {
     const url = `${this.competenciaUrl}/${id}`;
     return this.http.get<Competencia>(url).pipe(
       catchError(this.handleError<Competencia>(`getCompetencia id=${id}`))
     );
   }

   getTorneosCompetencias(): string[] {
     return this.torneosCompetencia;
   }

   updateCompetencia (competencia: Competencia): Observable<any> {
    return this.http.put(this.competenciaUrl, competencia, httpOptions).pipe(
      catchError(this.handleError<any>('updateCompetencia'))
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
