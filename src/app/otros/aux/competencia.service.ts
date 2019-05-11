import { Injectable } from '@angular/core';
import { Torneo } from 'src/app/torneos/Torneos-Record';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



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
  getCompetencia():Observable<Torneo[]> {
    return this.http.get(this.torneoUrl)
      .map(response => response.json().data as Torneo[])
      .flatMap(
        (torneos:Torneo[]) => Observable.forkJoin(torneos.map(
          (torneos:Torneo) => {
            return Observable.forkJoin(torneos.torneoID.map(
              torneoID => {
                return this.CompetenciaService.getSuit(torneoID)
              }
            )).map(
              suites => {
                torneos.competencia = suites;
                return torneos;
              })
          }
        ))
      );
  }
  */
}
