import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

import { TorneosRecordService } from '../../torneos/torneos-record.service';

import { Torneo } from '../../torneos/Torneos-Record';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Competencia } from '../../competencia';
import { CompetenciaService } from '../../competencia.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  torneos : Torneo[] ;
  competencias: Competencia[];

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



  constructor(private competenciaService: CompetenciaService,private torneosRecordService: TorneosRecordService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {

    this.getTorneos();
    this.torneoSeleccionado = null;
    this.getPaginas();
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

  getPaginas(): void {
    this.torneosRecordService.getTorneos().subscribe( torneos =>
      {
        if(((torneos.length/this.registrosPorPagina)-(Math.trunc(torneos.length / this.registrosPorPagina)))==0)
          this.totalPaginasF = Math.trunc(torneos.length / this.registrosPorPagina)
        else
          this.totalPaginasF = Math.trunc(torneos.length / this.registrosPorPagina)+1
      }
    )
  }

  getPaginasFiltradasFemenino(): void {
    this.torneosRecordService.getTorneos().subscribe( torneos =>
      {
        if(((torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).length/this.registrosPorPagina)-(Math.trunc(torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).length / this.registrosPorPagina)))==0)
          this.totalPaginasFiltradasF = Math.trunc(torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).length / this.registrosPorPagina)
        else
          this.totalPaginasFiltradasF = Math.trunc(torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).length / this.registrosPorPagina)+1
      }
    )
  }

  cambiarPaisSeleccionado(newTorneoSeleccionado?: string) {
    if(newTorneoSeleccionado=="")
    {
      this.torneoSeleccionado=null;
      this.filtradoPais=false;
      this.numeroPaginasFiltradasF=1;
      this.getTorneos();
    }
    else
    {
      this.torneoSeleccionado = newTorneoSeleccionado;
      this.filtradoPais=true;
      this.numeroPaginaF=1;
      this.getPaginasFiltradasFemenino();
      this.getTorneos();
    }
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }



  
  avanzarPagina(genero: number) {
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        if(this.numeroPaginaF < this.totalPaginasF)
        this.numeroPaginaF++;
        this.getTorneos();
      }
      else
      {
        if(this.numeroPaginasFiltradasF < this.totalPaginasFiltradasF)
        this.numeroPaginasFiltradasF++;
        this.getTorneos();
      }
    }
  }

  regresarPagina(genero: number) {
    console.log('regresarPagina funciona');
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        if(this.numeroPaginaF > 1)
        this.numeroPaginaF--;
        this.getTorneos();
      }
      else
      {
        if(this.numeroPaginasFiltradasF > 1)
        this.numeroPaginasFiltradasF--;
        this.getTorneos();
      }
    }
  }

  avanzarFinal(genero: number) {
    console.log('avanzarFinal funciona');
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        this.numeroPaginaF = this.totalPaginasF;
        this.getTorneos();
      }
      else
      {
        this.numeroPaginasFiltradasF = this.totalPaginasFiltradasF;
        this.getTorneos();
      }
    }
  }

  regresarPrincipio(genero: number) {
    console.log('regresarPrincipio funciona');
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        this.numeroPaginaF = 1;
        this.getTorneos();
      }
      else
      {
        this.numeroPaginasFiltradasF = 1;
        this.getTorneos();
      }
    }
  }

  resetGenero(generoSeleccionado: number) {
    if(generoSeleccionado===1)
    {
      this.genero='femenino'; 
      this.torneoSeleccionado=null; 
      this.numeroPaginaF=1;
      this.filtradoPais=false;
      this.getTorneos();
      /*var selector = document.getElementById("select") as HTMLElement;
      selector.selectedIndex = 0;*/
    }
  }



  get torneosCompetencias(): string[] {
    return this.competenciaService.getTorneosCompetencias();
  }

  getPaginasFiltradas(): void {
    this.competenciaService.getCompetencias().subscribe( competencias =>
      {
        if(((competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).length/this.registrosPorPagina)-(Math.trunc(competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).length / this.registrosPorPagina)))==0)
          this.totalPaginasFiltradasF = Math.trunc(competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).length / this.registrosPorPagina)
        else
          this.totalPaginasFiltradasF = Math.trunc(competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).length / this.registrosPorPagina)+1
      }
    )
  }

  cambiarTorneoSeleccionado(newTorneoSeleccionado?: string) {
    if(newTorneoSeleccionado=="")
    {
      this.torneoSeleccionado = null;
      this.filtradoPais = false;
      this.numeroPaginasFiltradasF = 1;
      this.getTorneos();
    }
    else
    {
      this.torneoSeleccionado = newTorneoSeleccionado;
      this.filtradoPais = true;
      this.numeroPaginaF = 1;
      this.getPaginasFiltradas();
      this.getTorneos();
    }
  }




      // Drag and Drop

      dragStart(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
        document.getElementById("demo").innerHTML = "Started to drag the p element";
      }
      
       dragEnd(ev) {
        document.getElementById("demo").innerHTML = "Finished dragging the p element.";
      }
      
       allowDrop(ev) {
        ev.preventDefault();
      }
      
       drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
        document.getElementById("demo").innerHTML = "The p element was dropped";
        alert('Usted a seleccionado a un jugador. ');
      }



}
