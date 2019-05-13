import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Torneo } from '../torneos/Torneos-Record';
import { TorneosRecordService } from '../torneos/torneos-record.service';


import { FechaCompetenciaService } from '../fecha-competencia.service';

import { CompetenciaService } from '../competencia.service';
import { Competencia } from '../competencia';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private nombre: string;
  private nacionalidadSeleccionada: string = null;
  private registrosPorPagina: number = 4;
  private numeroPagina: number = 1;
  private totalPaginas: number;
  private numeroPaginaFiltrado: number = 1;
  private totalPaginasFiltrado: number;
  private filtradoTorneo: boolean = false;


  private torneoSeleccionado: string = null;



  torneos: Torneo[];
  competencias: Competencia[];

  token;
  usuario;
  constructor(private competenciaService : CompetenciaService,private torneoService: TorneosRecordService, private route: ActivatedRoute, private location: Location) {
    this.token = localStorage.getItem('token');
    this.usuario = localStorage.getItem('correo');
  }

  ngOnInit() {
    /*
    this.getCompetencias();
    this.getPaginas();
    this.getTorneos();
    this.getPaginasTorneo();
    this.nombre = this.route.snapshot.url.toString();
    */
   this.getCompetencias();
   this.getPaginas();
   this.nombre = this.route.snapshot.url.toString();
  }
/*
  getCompetencias(): void {
    if(!this.filtradoTorneo)
    {
      let indice = (this.numeroPagina - 1)*this.registrosPorPagina;
      this.competenciaService.getCompetencias()
      .subscribe(competencias =>
        this.competencias = competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).slice(indice, indice+this.registrosPorPagina))
    }
    else
    {
      let indice = (this.numeroPaginaFiltrado - 1)*this.registrosPorPagina;
      this.competenciaService.getCompetencias()
      .subscribe(competencias =>
        this.competencias = competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).slice(indice, indice+this.registrosPorPagina))
    }
  }

  getPaginas(): void {
    this.competenciaService.getCompetencias().subscribe( competencias =>
        {
          if(((competencias.length/this.registrosPorPagina)-(Math.trunc(competencias.length / this.registrosPorPagina)))==0)
            this.totalPaginas = Math.trunc(competencias.length / this.registrosPorPagina)
          else
            this.totalPaginas = Math.trunc(competencias.length / this.registrosPorPagina)+1
        }
      )
  }

  getTorneos(): void {
    console.log("Get Torneos entra");
    if(!this.filtradoTorneo)
    {
      let indice = (this.numeroPagina -1)*this.registrosPorPagina;
      this.torneoService.getTorneos()
      .subscribe(torneos =>
        this.torneos = torneos.filter(torneo => this.nacionalidadSeleccionada == null || this.nacionalidadSeleccionada == torneo.nacionalidad).slice(indice, indice+this.registrosPorPagina),
        error => console.log(error),
        () => {this.torneos.forEach(function(element)
          {
            console.log("Torneo" + element.nombreTorneo);
          });})
    }
    else
    {
      let indice = (this.numeroPaginaFiltrado -1)*this.registrosPorPagina;
      this.torneoService.getTorneos()
      .subscribe(torneos =>
        this.torneos = torneos.filter(torneo => this.nacionalidadSeleccionada == null || this.nacionalidadSeleccionada == torneo.nacionalidad).slice(indice, indice+this.registrosPorPagina),
        error => console.log(error),
        () => {this.torneos.forEach(function(element)
          {
            console.log("Torneo" + element);
          });})
    }
    
    
  }

  
   
  getPaginasTorneo(): void {
    this.torneoService.getTorneos().subscribe( torneos =>
        {
          if(((torneos.length/this.registrosPorPagina)-(Math.trunc(torneos.length / this.registrosPorPagina)))==0)
            this.totalPaginas = Math.trunc(torneos.length / this.registrosPorPagina)
          else
            this.totalPaginas = Math.trunc(torneos.length / this.registrosPorPagina)+1
        }
      )
  }

  getPaginasFiltradas(): void {
    this.torneoService.getTorneos().subscribe( torneos =>
      {
        if(((torneos.filter(torneo => this.nacionalidadSeleccionada == null || this.nacionalidadSeleccionada == torneo.nacionalidad).length/this.registrosPorPagina)-(Math.trunc(torneos.filter(torneo => this.nacionalidadSeleccionada == null || this.nacionalidadSeleccionada == torneo.nacionalidad).length / this.registrosPorPagina)))==0)
          this.totalPaginasFiltrado = Math.trunc(torneos.filter(torneo => this.nacionalidadSeleccionada == null || this.nacionalidadSeleccionada == torneo.nacionalidad).length / this.registrosPorPagina)
        else
          this.totalPaginasFiltrado = Math.trunc(torneos.filter(torneo => this.nacionalidadSeleccionada == null || this.nacionalidadSeleccionada == torneo.nacionalidad).length / this.registrosPorPagina)+1
      }
    )
  }

  get nacionalidadTorneos(): string[] {
    console.log("Get Nacionalidad entra");
    return this.torneoService.getNacionalidadTorneos();
  }

  cambiarNacionalidadSeleccionada(newNacionalidadSeleccionada?: string) {
    if(newNacionalidadSeleccionada=="")
    {
      this.nacionalidadSeleccionada = null;
      this.filtradoTorneo = false;
      this.numeroPaginaFiltrado = 1;
      this.getTorneos();
    }
    else
    {
      this.nacionalidadSeleccionada = newNacionalidadSeleccionada;
      this.filtradoTorneo = true;
      this.numeroPagina = 1;
      this.getPaginasFiltradas();
      this.getTorneos();
    }
  }

  avanzarPagina() {
    if(!this.filtradoTorneo)
    {
      if(this.numeroPagina < this.totalPaginas)
        this.numeroPagina++;
        this.getTorneos();
    }
    else
    {
      if(this.numeroPaginaFiltrado < this.totalPaginasFiltrado)
        this.numeroPaginaFiltrado++;
        this.getTorneos();
    }
  }

  regresarPagina() {
    if(!this.filtradoTorneo)
    {
      if(this.numeroPagina > 1)
      this.numeroPagina--;
      this.getTorneos();
    }
    else
    {
      if(this.numeroPaginaFiltrado > 1)
      this.numeroPaginaFiltrado--;
      this.getTorneos();
    }
  }

  avanzarFinal() {
    if(!this.filtradoTorneo)
      {
        this.numeroPagina = this.totalPaginas;
        this.getTorneos();
      }
      else
      {
        this.numeroPaginaFiltrado = this.totalPaginasFiltrado;
        this.getTorneos();
      }
  }

  regresarPrincipio(nacionalidad: number) {
    if(!this.filtradoTorneo)
      {
        this.numeroPagina = 1;
        this.getTorneos();
      }
      else
      {
        this.numeroPaginaFiltrado = 1;
        this.getTorneos();
      }
  }
*/
getCompetencias(): void {
  if(!this.filtradoTorneo)
  {
    let indice = (this.numeroPagina - 1)*this.registrosPorPagina;
    this.competenciaService.getCompetencias()
    .subscribe(competencias =>
      this.competencias = competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).slice(indice, indice+this.registrosPorPagina))
  }
  else
  {
    let indice = (this.numeroPaginaFiltrado - 1)*this.registrosPorPagina;
    this.competenciaService.getCompetencias()
    .subscribe(competencias =>
      this.competencias = competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).slice(indice, indice+this.registrosPorPagina))
  }
}

getPaginas(): void {
  this.competenciaService.getCompetencias().subscribe( competencias =>
      {
        if(((competencias.length/this.registrosPorPagina)-(Math.trunc(competencias.length / this.registrosPorPagina)))==0)
          this.totalPaginas = Math.trunc(competencias.length / this.registrosPorPagina)
        else
          this.totalPaginas = Math.trunc(competencias.length / this.registrosPorPagina)+1
      }
    )
}

getPaginasFiltradas(): void {
  this.competenciaService.getCompetencias().subscribe( competencias =>
    {
      if(((competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).length/this.registrosPorPagina)-(Math.trunc(competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).length / this.registrosPorPagina)))==0)
        this.totalPaginasFiltrado = Math.trunc(competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).length / this.registrosPorPagina)
      else
        this.totalPaginasFiltrado = Math.trunc(competencias.filter(competencia => this.torneoSeleccionado == null || this.torneoSeleccionado == competencia.torneo).length / this.registrosPorPagina)+1
    }
  )
}

get torneosCompetencias(): string[] {
  return this.competenciaService.getTorneosCompetencias();
}

cambiarTorneoSeleccionado(newTorneoSeleccionado?: string) {
  if(newTorneoSeleccionado=="")
  {
    this.torneoSeleccionado = null;
    this.filtradoTorneo = false;
    this.numeroPaginaFiltrado = 1;
    this.getCompetencias();
  }
  else
  {
    this.torneoSeleccionado = newTorneoSeleccionado;
    this.filtradoTorneo = true;
    this.numeroPagina = 1;
    this.getPaginasFiltradas();
    this.getCompetencias();
  }
}

avanzarPagina() {
  if(!this.filtradoTorneo)
  {
    if(this.numeroPagina < this.totalPaginas)
      this.numeroPagina++;
      this.getCompetencias();
  }
  else
  {
    if(this.numeroPaginaFiltrado < this.totalPaginasFiltrado)
      this.numeroPaginaFiltrado++;
      this.getCompetencias();
  }
}

regresarPagina() {
  if(!this.filtradoTorneo)
  {
    if(this.numeroPagina > 1)
    this.numeroPagina--;
    this.getCompetencias();
  }
  else
  {
    if(this.numeroPaginaFiltrado > 1)
    this.numeroPaginaFiltrado--;
    this.getCompetencias();
  }
}

avanzarFinal() {
  if(!this.filtradoTorneo)
    {
      this.numeroPagina = this.totalPaginas;
      this.getCompetencias();
    }
    else
    {
      this.numeroPaginaFiltrado = this.totalPaginasFiltrado;
      this.getCompetencias();
    }
}

regresarPrincipio(genero: number) {
  if(!this.filtradoTorneo)
    {
      this.numeroPagina = 1;
      this.getCompetencias();
    }
    else
    {
      this.numeroPaginaFiltrado = 1;
      this.getCompetencias();
    }
}





}
