import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Competencia } from '../competencia';
import { CompetenciaService } from '../competencia.service';

@Component({
  selector: 'app-capturista',
  templateUrl: './capturista.component.html',
  styleUrls: ['./capturista.component.css']
})
export class CapturistaComponent implements OnInit {

  private nombre: string;
  private torneoSeleccionado: string = null;
  private registrosPorPagina: number = 4;
  private numeroPagina: number = 1;
  private totalPaginas: number;
  private numeroPaginaFiltrado: number = 1;
  private totalPaginasFiltrado: number;
  private filtradoTorneo: boolean = false;
  
  competencias: Competencia[];
  
  constructor(private competenciaService: CompetenciaService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getCompetencias();
    this.getPaginas();
    this.nombre = this.route.snapshot.url.toString();
  }

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
