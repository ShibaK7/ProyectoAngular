import { Component, OnInit, Input } from '@angular/core';

import { TorneosRecordService } from './torneos-record.service';

import { Torneo } from './Torneos-Record';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



declare const myTest: any;
declare var $: any;

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  torneos : Torneo[] ;

  private genero: string = "";
  private torneoSeleccionado: string = null;
  private registrosPorPagina: number = 5;
  private numeroPaginaF: number = 1;
  private totalPaginasF: number;
  private numeroPaginasFiltradasF: number = 1;
  private totalPaginasFiltradasF: number;
  private filtradoPais: boolean = false;

  private setNombre: string = " ";

  private searchTerms = new Subject<string>();


  constructor(private torneosRecordService: TorneosRecordService) { }

  ngOnInit() {
  // POP UP
    var modal = document.getElementById('modal-wrapper');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  // Finaliza POP UP  

  // THIS
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
























}
