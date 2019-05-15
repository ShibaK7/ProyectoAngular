import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { TorneosRecordService } from '../torneos/torneos-record.service';
import { Torneo } from '../torneos/Torneos-Record';

import { FechaCompetenciaService } from '../fecha-competencia.service';

@Component({
  selector: 'app-crear-competencia-test1',
  templateUrl: './crear-competencia-test1.component.html',
  styleUrls: ['./crear-competencia-test1.component.css']
})
export class CrearCompetenciaTest1Component implements OnInit {

  torneos : Torneo[] ;
  torn: Observable<Torneo[]>;
  EditRowID: any = ' ';
  //competencias: Competencia[];

  private genero: string = "";
  private torneoSeleccionado: string = null;
  private registrosPorPagina: number = 24;
  private numeroPaginaF: number = 1;
  private totalPaginasF: number;
  private numeroPaginasFiltradasF: number = 1;
  private totalPaginasFiltradasF: number;
  private filtradoPais: boolean = false;

  private setNombre: string = " ";

  private searchTerms = new Subject<string>();






  constructor(private torneosRecordService: TorneosRecordService, private fechaCompetenciaService :FechaCompetenciaService , private route: ActivatedRoute, private location: Location) { }

  public ngOnInit() {
  }

}
