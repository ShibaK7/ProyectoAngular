import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
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

  t1A : number;
  t2A : number;
  t3A : number;
  t4A : number;
  t5A : number;
  t6A : number;

  t1B : number;
  t2B : number;
  t3B : number;
  t4B : number;
  t5B : number;
  t6B : number;

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

    this.t1A = 0 ;
    this.t2A = 0 ;
    this.t3A = 0 ;
    this.t4A = 0 ;
    this.t5A = 0 ;
    this.t6A = 0 ;

  
    this.t1B = 0 ;
    this.t2B = 0 ;
    this.t3B = 0 ;
    this.t4B = 0 ;
    this.t5B = 0 ;
    this.t6B = 0 ;


  
    this.getTorneos();
    this.torneoSeleccionado = null;
    this.genero = "femenino";
    this.torneoSeleccionado = null;    
  }

  ngAfterViewInit() {
 
    
  }
/*
  recuperar(){
    this.jug1 =  localStorage.getItem('jugador1');
    this.jug2 =  localStorage.getItem('jugador2');
    this.fecha =  localStorage.getItem('fecha');
    console.log(this.jug1,this.jug2,this.fecha);
  }
  */

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


/*

t1A : number;
t2A : number;
t3A : number;
t4A : number;
t5A : number;
t6A : number;

t1B : number;
t2B : number;
t3B : number;
t4B : number;
t5B : number;
t6B : number;

*/

cambioEstado1A(){
  if(this.t1A == 0 && this.t1B == 0)
    {
        this.t2A = 1;
        this.t2B =1;
  console.log("El valor de  t2A es: " +this.t2A + "-"+this.t2B);
    }
  
  }
  
  cambioEstado1B(){
    if(this.t1B == 0 && this.t1A == 0)
    {
        this.t2B = 1;
        this.t2A =1;
  console.log("El valor de  t2A es: " +this.t2B + "-"+this.t2A);
    }
  }
  
  
  
  cambioEstado2A(){
  if(this.t2A == 1 && this.t2B == 1)
    {
        this.t3A = 1;
        this.t3B =1;
  console.log("El valor de  t3A es: " +this.t3A + "-"+this.t3B);
    }
  
  }
  
  cambioEstado2B(){
    if(this.t2B == 0 && this.t2A == 0)
    {
        this.t3B = 1;
        this.t3A =1;
  console.log("El valor de  t3A es: " +this.t3B + "-"+this.t3A);
    }
  }
  
  cambioEstado3A(){
  if(this.t3A == 1 && this.t3B == 1)
    {
        this.t4A = 1;
        this.t4B =1;
  console.log("El valor de  t4A es: " +this.t4A + "-"+this.t4B);
    }
  
  }
  
  cambioEstado3B(){
    if(this.t3B == 0 && this.t3A == 0)
    {
        this.t4B = 1;
        this.t4A =1;
  console.log("El valor de  t4A es: " +this.t4B + "-"+this.t4A);
    }
  }
  
  
  cambioEstado4A(){
  if(this.t4A == 1 && this.t4B == 1)
    {
        this.t5A = 1;
        this.t5B =1;
  console.log("El valor de  t5A es: " +this.t5A + "-"+this.t5B);
    }
  
  }
  
  cambioEstado4B(){
    if(this.t4B == 0 && this.t4A == 0)
    {
        this.t5B = 1;
        this.t5A =1;
  console.log("El valor de  t5A es: " +this.t5B + "-"+this.t5A);
    }
  }

  cambioEstado5A(){
    if(this.t5A == 1 && this.t5B == 1)
      {
          this.t6A = 1;
          this.t6B =1;
    console.log("El valor de  t5A es: " +this.t6A + "-"+this.t6B);
      }
    
    }
    
    cambioEstado5B(){
      if(this.t5B == 0 && this.t5A == 0)
      {
          this.t6B = 1;
          this.t6A =1;
    console.log("El valor de  t5A es: " +this.t6B + "-"+this.t6A);
      }
    }


}
