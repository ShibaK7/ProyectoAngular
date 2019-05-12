import { Injectable } from '@angular/core';
import { Torneo } from 'src/app/torneos/Torneos-Record';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,forkJoin, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { TorneosRecordService } from '../../torneos/torneos-record.service';
import { competencia } from '../aux/competencia';


import 'rxjs/add/operator/map';
import 'rxjs/Rx';





@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  private torneoUrl = 'api/TORNEOS';
  private torneoss: Torneo[] = [];

  constructor(private http: HttpClient) { 
    this.http.get<Torneo[]>(this.torneoUrl).subscribe(data => {
      this.torneoss = data;
    });
  }



/*


  getCompetenciaIndividual():Observable<Torneo[]> {
    return this.http.get(this.torneoUrl)
      .map(response => response.json().data as Torneo[])
        .flatMap(
          (torneos_s : Torneos[]) => Observable.forkJoin(torneos_s.map(
            (torneos : Torneo) => {
              return Observable.forkJoin(torneos.id_individualT.map(
                id_individualT=> {
                  return this.TorneosRecordService.getTorneo(torneos.id)
                }
                )).map( 
                  competencia => {
                  torneos.id_individualT = competencia;
                  return torneos;
                })
            }
          )    )
        );
  }



  getHeroesWithSuit(): Observable<Torneo[]> {
    return this.http.get(this.torneoUrl)
      .map( response  => response.json().data as Torneo[])
      .do( response => response.forEach( ( data ) => data.suite = this.suiteService
        .getSuit(data.suiteId)
        .subscribe(suite => data.suite = suite as Suite)
      ))
      .catch(this.handleError);
  }
*/

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
