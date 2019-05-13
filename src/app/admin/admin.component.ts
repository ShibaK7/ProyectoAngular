import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Torneo } from '../torneos/Torneos-Record';
import { TorneosRecordService } from '../torneos/torneos-record.service';


import { FechaCompetenciaService } from '../fecha-competencia.service';





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

  token;
  usuario;
  constructor(private torneoService: TorneosRecordService, private route: ActivatedRoute, private location: Location) {
    this.token = localStorage.getItem('token');
    this.usuario = localStorage.getItem('correo');
  }

  ngOnInit() {
    this.getTorneos();
    this.getPaginasTorneo();
    this.nombre = this.route.snapshot.url.toString();

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
}