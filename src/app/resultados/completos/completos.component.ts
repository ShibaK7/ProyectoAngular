import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ResultadoI } from '../../resultadosI';
import { ResultadoIService } from '../../resultadosI.service';
import { ResultadoD } from '../../resultadoD';
import { ResultadoDService } from '../../resultadosD.service';


@Component({
  selector: 'app-completos',
  templateUrl: './completos.component.html',
  styleUrls: ['./completos.component.css']
})
export class CompletosComponent implements OnInit {

  private tipo: string = "";
  private generoSeleccionado: string = null;
  private torneoSeleccionado: string = null;
  private registrosPorPagina: number = 5;
  private numeroPaginaI: number = 1;
  private numeroPaginaD: number = 1;
  private numeroPaginasFiltradasI: number = 1;
  private numeroPaginasFiltradasD: number = 1;
  private numeroPaginasTorneoI: number = 1;
  private numeroPaginasTorneoD: number = 1;
  private totalPaginasFiltradasI: number;
  private totalPaginasFiltradasD: number;
  private totalPaginasI: number;
  private totalPaginasD: number;
  private totalPaginasTorneoI: number;
  private totalPaginasTorneoD: number;
  private filtradoGenero: boolean = false;
  private filtradoTorneo: boolean = false;

  individuales: ResultadoI[];
  individuales$: Observable<ResultadoI[]>;
  dobles: ResultadoD[];
  dobles$: Observable<ResultadoD[]>;
  private searchTerms = new Subject<string>();


  constructor(private resultadoIService: ResultadoIService,  private resultadoDService: ResultadoDService) { }

  ngOnInit() {
    this.getResultadoIndividual();
    this.getPaginasIndividual();
    this.getResultadoDobles();
    this.getPaginasDoble();
    this.tipo = "individual";
    this.generoSeleccionado = null;
    this.torneoSeleccionado = null;

    this.individuales$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) =>
      this.resultadoIService.searchJugadoresI(term))
    );
    this.dobles$ = this.searchTerms.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap((term: string) =>
      this.resultadoDService.searchJugadoresD(term))
    );
  }

  getResultadoIndividual(): void
  {
    if(!this.filtradoGenero)
    {
      let indice = (this.numeroPaginaI -1)*this.registrosPorPagina;
      this.resultadoIService.getJugadores().subscribe( individuales =>
      this.individuales = individuales.filter(individual => this.generoSeleccionado == null || this.generoSeleccionado == individual.genero).slice(indice, indice+this.registrosPorPagina)) 
    }
    else
    {
      let indice = (this.numeroPaginasFiltradasI -1)*this.registrosPorPagina;
      this.resultadoIService.getJugadores().subscribe( individuales =>
      this.individuales = individuales.filter(individual => this.generoSeleccionado == null || this.generoSeleccionado == individual.genero).slice(indice, indice+this.registrosPorPagina)) 
    }
  }

  getResultadoDobles(): void
  {
    if(!this.filtradoGenero)
    {
      let indice = (this.numeroPaginaD -1)*this.registrosPorPagina;
      this.resultadoDService.getJugadores().subscribe( dobles =>
      this.dobles = dobles.filter(doble => this.generoSeleccionado == null || this.generoSeleccionado == doble.genero).slice(indice, indice+this.registrosPorPagina))
    }

    else
    {
      let indice = (this.numeroPaginasFiltradasD -1)*this.registrosPorPagina;
      this.resultadoDService.getJugadores().subscribe( dobles =>
      this.dobles = dobles.filter(doble => this.generoSeleccionado == null || this.generoSeleccionado == doble.genero).slice(indice, indice+this.registrosPorPagina))
    }
  }

  get generoIndividuales() : string[] {
    return this.resultadoIService.getGeneros();
  }

  getPaginasIndividual(): void {
    this.resultadoIService.getJugadores().subscribe( individuales =>
      {
        if(((individuales.length/this.registrosPorPagina)-(Math.trunc(individuales.length/this.registrosPorPagina)))==0)
          this.totalPaginasI = Math.trunc(individuales.length / this.registrosPorPagina)
        else
        this.totalPaginasI = Math.trunc(individuales.length / this.registrosPorPagina)+1
      }
    )
  }

  getPaginasFiltradasIndividuales(): void {
    this.resultadoIService.getJugadores().subscribe( individuales =>
      {
        if(((individuales.filter(individual => this.generoSeleccionado == null || this.generoSeleccionado == individual.genero).length/this.registrosPorPagina)-(Math.trunc(individuales.filter(individual => this.generoSeleccionado == null || this.generoSeleccionado == individual.genero).length/this.registrosPorPagina)))==0)
          this.totalPaginasFiltradasI = Math.trunc(individuales.filter(individual => this.generoSeleccionado == null || this.generoSeleccionado == individual.genero).length / this.registrosPorPagina)
        else
          this.totalPaginasFiltradasI = Math.trunc(individuales.filter(individual => this.generoSeleccionado == null || this.generoSeleccionado == individual.genero).length / this.registrosPorPagina)+1

          console.log(this.totalPaginasFiltradasI);
      }
    )
  }

  getPaginasDoble(): void {
    this.resultadoDService.getJugadores().subscribe( dobles =>
      {
        if(((dobles.length/this.registrosPorPagina)-(Math.trunc(dobles.length/this.registrosPorPagina)))==0)
          this.totalPaginasD = Math.trunc(dobles.length / this.registrosPorPagina)
        else
          this.totalPaginasD = Math.trunc(dobles.length / this.registrosPorPagina)+1
      }
    )
  }

  getPaginasFiltradasDobles(): void {
    this.resultadoDService.getJugadores().subscribe( dobles =>
      {
        if(((dobles.filter(doble => this.generoSeleccionado == null || this.generoSeleccionado == doble.genero).length/this.registrosPorPagina)-(Math.trunc(dobles.filter(doble => this.generoSeleccionado == null || this.generoSeleccionado == doble.genero).length/this.registrosPorPagina)))==0)
          this.totalPaginasFiltradasD = Math.trunc(dobles.filter(doble => this.generoSeleccionado == null || this.generoSeleccionado == doble.genero).length / this.registrosPorPagina)
        else
          this.totalPaginasFiltradasD = Math.trunc(dobles.filter(doble => this.generoSeleccionado == null || this.generoSeleccionado == doble.genero).length / this.registrosPorPagina)+1
          console.log(this.totalPaginasFiltradasD);
      }
    )
  }

  get generoDobles() : string[] {
    return this.resultadoDService.getGeneros();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  cambiarGeneroSeleccionado(newGeneroSeleccionado?: string) {
    if(newGeneroSeleccionado=="")
    {
      this.generoSeleccionado=null;
      this.filtradoGenero=false;
      this.numeroPaginasFiltradasD=1;
      this.numeroPaginasFiltradasI=1;
      this.getResultadoIndividual();
      this.getResultadoDobles();
    }
    else
    {
      this.generoSeleccionado = newGeneroSeleccionado;
      this.filtradoGenero=true;
      this.numeroPaginaI=1;
      this.numeroPaginaD=1;
      this.getPaginasFiltradasIndividuales();
      this.getPaginasFiltradasDobles();
      this.getResultadoIndividual();
      this.getResultadoDobles();
    }
  }

  avanzarPagina(tipo: number){
    if(tipo===1 )
    {
      if(!this.filtradoGenero)
      {
        if(this.numeroPaginaI < this.totalPaginasI)
         this.numeroPaginaI++;
         this.getResultadoIndividual();
      }
      else
      {
        if(this.numeroPaginasFiltradasI < this.totalPaginasFiltradasI)
         this.numeroPaginasFiltradasI++;
         this.getResultadoIndividual();
      }
    }
    else
    {
      if(!this.filtradoGenero)
      {
        if(this.numeroPaginaD < this.totalPaginasD)
        this.numeroPaginaD++;
        this.getResultadoDobles();
      }
      else
      {
        if(this.numeroPaginasFiltradasD < this.totalPaginasFiltradasD)
        this.numeroPaginasFiltradasD++;
        this.getResultadoDobles();
      }
    }
  }

  regresarPagina(tipo: number) {
    if(tipo===1)
    {
      if(!this.filtradoGenero)
      {
        if(this.numeroPaginaI > 1)
        this.numeroPaginaI--;
        this.getResultadoIndividual();
      }
      else
      {
        if(this.numeroPaginasFiltradasI > 1)
        this.numeroPaginasFiltradasI--;
        this.getResultadoIndividual();
      }
    }
    else
    {
      if(!this.filtradoGenero)
      {
        if(this.numeroPaginaD > 1)
        this.numeroPaginaD--;
        this.getResultadoDobles();
      }
      else
      {
        if(this.numeroPaginasFiltradasD > 1)
        this.numeroPaginasFiltradasD--;
        this.getResultadoDobles();
      }
    }
  }

  avanzarFinal(tipo: number)
  {
    if(tipo===1)
    {
      if(!this.filtradoGenero)
      {
        this.numeroPaginaI = this.totalPaginasI;
        this.getResultadoIndividual();
      }
      else
      {
        this.numeroPaginasFiltradasI = this.totalPaginasFiltradasI;
        this.getResultadoIndividual();
      }
    }
    else
    {
      if(!this.filtradoGenero)
      {
        this.numeroPaginaD = this.totalPaginasD;
        this.getResultadoDobles();
      }
      else
      {
        this.numeroPaginasFiltradasD = this.totalPaginasFiltradasD;
        this.getResultadoDobles();
      }
    }
  }

  regresarPrincipio(tipo: number){
    if(tipo===1)
    {
      if(!this.filtradoGenero)
      {
        this.numeroPaginaI = 1;
        this.getResultadoIndividual();
      }
      else
      {
        this.numeroPaginasFiltradasI = 1;
        this.getResultadoIndividual();
      }
    }
    else
    {
      if(!this.filtradoGenero)
      {
        this.numeroPaginaD = 1;
        this.getResultadoDobles();
      }
      else
      {
        this.numeroPaginasFiltradasD = 1;
        this.getResultadoDobles();
      }
    }
  }

  resetTipo(tipoSeleccionado: number) {
    if(tipoSeleccionado===1)
    {
      this.tipo="individual";
      this.generoSeleccionado=null;
      this.numeroPaginaI=1;
      this.filtradoGenero=false;
      this.getResultadoIndividual();
    }
    else
    {
      this.tipo="dobles";
      this.generoSeleccionado=null;
      this.numeroPaginaD=1;
      this.filtradoGenero=false;
      this.getResultadoDobles();
    }
  }
}
