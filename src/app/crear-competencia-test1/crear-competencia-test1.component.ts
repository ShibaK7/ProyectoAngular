import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { TorneosRecordService } from '../torneos/torneos-record.service';
import { Torneo } from '../torneos/Torneos-Record';

import { FechaCompetenciaService } from '../fecha-competencia.service';

import { ResultadoIService } from '../resultadosI.service';
import { ResultadoI } from '../resultadosI';

import { ResultadoDService } from '../resultadosD.service';
import { ResultadoD } from '../resultadoD';





@Component({
  selector: 'app-crear-competencia-test1',
  templateUrl: './crear-competencia-test1.component.html',
  styleUrls: ['./crear-competencia-test1.component.css']
})
export class CrearCompetenciaTest1Component implements OnInit {

  jugador1 : string;
  jugador2 : string;
  verificado : number;
  abandono : number;
  resultadosI : ResultadoI[];

  torneos : Torneo[] ;
  //torn: Observable<Torneo[]>;
  //EditRowID: any = ' ';
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

   newTorneo1 : number;
   newTorneo2 : number;

  private searchTerms = new Subject<string>();

  constructor(private torneosRecordService: TorneosRecordService, private fechaCompetenciaService :FechaCompetenciaService ,private resultadoDService : ResultadoDService, private resultadoIService : ResultadoIService, private route: ActivatedRoute, private location: Location) { }

  public ngOnInit() {

    this.verificado = 0;
    this.abandono = 0;
    this.getResultadosI();


    
    this.getTorneos();
    this.torneoSeleccionado = null;
    this.genero = "femenino";
    this.torneoSeleccionado = null;    
  }



  getTorneos(): void {
    if(!this.filtradoPais)
    {
      let indice = (this.numeroPaginaF -1)*this.registrosPorPagina;
      this.torneosRecordService.getTorneos()
        .subscribe(torneos => 
          this.torneos = torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).slice(indice, indice+this.registrosPorPagina))
    }
    else
    {
      let indice = (this.numeroPaginasFiltradasF -1)*this.registrosPorPagina;
      this.torneosRecordService.getTorneos()
        .subscribe(torneos => 
          this.torneos = torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).slice(indice, indice+this.registrosPorPagina))
    }
  }



getResultadosI() {
  this.resultadoIService.getJugadores().subscribe(
    resultadoI2 => this.resultadosI = resultadoI2
  );
}








cambioAbandono() {
if(this.abandono == 0){
  this.abandono = 1;
  console.log("El valor de Abandono es: " +this.abandono);
}
else {
  this.abandono = 0;
  console.log("El valor de Abandono es: " +this.abandono);
}

}

guardarResultado(){
  let resultadoI = new ResultadoI("Rael Nafal","Rael Nafal2", 4,
    6, 7,8 ,10 , 1, 2, 3, 5, 6, 1, 0," ");
  this.resultadoIService.addResultadoI(resultadoI).subscribe(
    resultadoI => this.resultadosI.push(resultadoI)
  )

}


}
