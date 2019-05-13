import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

import { TorneosRecordService } from '../../torneos/torneos-record.service';
import { Torneo } from '../../torneos/Torneos-Record';

import { Observable, Subject, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

//import { Competencia } from '../../competencia';
//import { CompetenciaService } from '../../competencia.service';

import { CompetenciasServicosService } from './competencias-servicos.service';
import { Contents } from './contents';



@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  private nombre: string;
  private torneoSeleccionado: string = null;
  private registrosPorPagina: number = 4;
  private numeroPagina: number = 1;
  private totalPaginas: number;
  private numeroPaginaFiltrado: number = 1;
  private totalPaginasFiltrado: number;
  private filtradoTorneo: boolean = false;
  

  private torneo: Torneo;
  contents: Contents[];
  private opcionSeleccionada: number;

  constructor(private route: ActivatedRoute, private torneosRecordService: TorneosRecordService,  private competenciasServicosService: CompetenciasServicosService, private location: Location) { }

  ngOnInit() {
    this.getTorneo();
    this.opcionSeleccionada = 1;  
    this.getCompetencias();
    this.getPaginas();
    this.nombre = this.route.snapshot.url.toString();
  }

  getCompetencias(): void {
    if(!this.filtradoTorneo)
    {
      let indice = (this.numeroPagina - 1)*this.registrosPorPagina;
      this.competenciasServicosService.getCompetencias()
      .subscribe(content =>
        this.contents = content.filter(content => this.torneoSeleccionado == null || this.torneoSeleccionado == content.torneo).slice(indice, indice+this.registrosPorPagina))
    }
    else
    {
      let indice = (this.numeroPaginaFiltrado - 1)*this.registrosPorPagina;
      this.competenciasServicosService.getCompetencias()
      .subscribe(content =>
        this.contents = content.filter(content => this.torneoSeleccionado == null || this.torneoSeleccionado == content.torneo).slice(indice, indice+this.registrosPorPagina))
    }
  }

  getPaginas(): void {
    this.competenciasServicosService.getCompetencias().subscribe( content =>
        {
          if(((content.length/this.registrosPorPagina)-(Math.trunc(content.length / this.registrosPorPagina)))==0)
            this.totalPaginas = Math.trunc(content.length / this.registrosPorPagina)
          else
            this.totalPaginas = Math.trunc(content.length / this.registrosPorPagina)+1
        }
      )
  }

  getPaginasFiltradas(): void {
    this.competenciasServicosService.getCompetencias().subscribe( content =>
      {
        if(((content.filter(content => this.torneoSeleccionado == null || this.torneoSeleccionado == content.torneo).length/this.registrosPorPagina)-(Math.trunc(content.filter(content => this.torneoSeleccionado == null || this.torneoSeleccionado == content.torneo).length / this.registrosPorPagina)))==0)
          this.totalPaginasFiltrado = Math.trunc(content.filter(content => this.torneoSeleccionado == null || this.torneoSeleccionado == content.torneo).length / this.registrosPorPagina)
        else
          this.totalPaginasFiltrado = Math.trunc(content.filter(content => this.torneoSeleccionado == null || this.torneoSeleccionado == content.torneo).length / this.registrosPorPagina)+1
      }
    )
  }

  get torneosCompetencias(): string[] {
    return this.competenciasServicosService.getTorneosCompetencias();
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

  getTorneo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.torneosRecordService.getTorneo(id)
      .subscribe(torneo => this.torneo = torneo);
  }

  cambiarSeleccion(opcionElegida: number)
  {
    this.opcionSeleccionada = opcionElegida;
  }


}
