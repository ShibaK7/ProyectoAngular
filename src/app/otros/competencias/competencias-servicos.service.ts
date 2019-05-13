import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Contents } from '../competencias/contents';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompetenciasServicosService {

  private contentUrl = 'api/COMPETENCIAS_TORNEOS';
  private content: Contents[] = [];
  private torneosCompetencia: string[] = [];
  

  constructor(private http: HttpClient) { 
    this.http.get<Contents[]>(this.contentUrl).subscribe(data => {
      this.content = data;
      this.torneosCompetencia = data.map(t => t.torneo)
      .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getCompetencias (): Observable<Contents[]> {
    return this.http.get<Contents[]>(this.contentUrl).pipe(
      catchError(this.handleError<Contents[]>('getCompetencias', []))
    );
  }

  getCompetencia (id: number): Observable<Contents> {
    const url = `${this.contentUrl}/${id}`;
    return this.http.get<Contents>(url).pipe(
      catchError(this.handleError<Contents>(`getCompetencia id=${id}`))
    );
  }

  getTorneosCompetencias(): string[] {
    return this.torneosCompetencia;
  }

  updateCompetencia (content: Contents): Observable<any> {
    return this.http.put(this.contentUrl, content, httpOptions).pipe(
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
