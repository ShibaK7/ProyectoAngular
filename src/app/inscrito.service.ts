import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Inscrito } from './inscrito';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class InscritoService {

  
  private inscritosUrl = 'api/INSCRITOS';
  private inscritos: Inscrito[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Inscrito[]>(this.inscritosUrl).subscribe(data=> {
      this.inscritos = data;
    })
   }

   getInscritos(): Observable<Inscrito[]> {
     return this.http.get<Inscrito[]>(this.inscritosUrl).pipe(
       catchError(this.handleError<Inscrito[]>('getInscritos', []))
     );
   }

   getInscrito(id: number): Observable<Inscrito> {
     const url = `${this.inscritosUrl}/${id}`;
     return this.http.get<Inscrito>(url).pipe(
      catchError(this.handleError<Inscrito>(`getInscrito id=${id}`))
     );
   }

   addInscrito(inscrito: Inscrito) {
    return this.http.post<Inscrito>(this.inscritosUrl, inscrito, httpOptions).pipe(
      catchError(this.handleError<Inscrito>('addInscrito'))
    )
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
