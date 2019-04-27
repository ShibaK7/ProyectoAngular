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
  private registrosPorPagina: number = 7;
  private numeroPaginaI: number = 1;
  private numeroPaginaD: number = 1;
  private totalPaginasI: number;
  private totalPaginasD: number;
  private filtradoGenerp: boolean = false;

  individuales: ResultadoI[];
  individuales$: Observable<ResultadoI[]>;
  private searchTerms = new Subject<string>();

  dobles: ResultadoD[];
  dobles$: Observable<ResultadoD[]>;


  constructor(private resultadoIService: ResultadoIService,  private resultadoDService: ResultadoDService) { }



  ngOnInit() {
    this.getResultadoIndividual();
    this.getPaginasIndividual();
    this.getResultadoDobles();
    this.getPaginasDoble();
    this.tipo = "individual";
    this.generoSeleccionado = null;
  }

  getResultadoIndividual(): void
  {
    let indice = (this.numeroPaginaI -1)*this.registrosPorPagina;
    this.resultadoIService.getJugadores().subscribe( individuales =>
      this.individuales = individuales.filter(individual => this.generoSeleccionado == null || this.generoSeleccionado == individual.genero).slice(indice, indice+this.registrosPorPagina)) 
  }

  getResultadoDobles(): void
  {
    let indice = (this.numeroPaginaD -1)*this.registrosPorPagina;
    this.resultadoDService.getJugadores().subscribe( dobles =>
      this.dobles = dobles.filter(doble => this.generoSeleccionado == null || this.generoSeleccionado == doble.genero).slice(indice, indice+this.registrosPorPagina))
  }

  get generoIndividuales() : string[] {
    return this.resultadoIService.getGeneros();
  }

  getPaginasIndividual(): void {
    this.resultadoIService.getJugadores().subscribe( individuales =>
      this.totalPaginasI = individuales.length / this.registrosPorPagina)
  }

  getPaginasDoble(): void {
    this.resultadoDService.getJugadores().subscribe( dobles =>
      this.totalPaginasD = dobles.length / this.registrosPorPagina)
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
      this.filtradoGenerp=false;
      this.getResultadoIndividual();
      this.getResultadoDobles();
    }
    else
    {
      this.generoSeleccionado = newGeneroSeleccionado;
      this.filtradoGenerp=true;
      this.numeroPaginaI=1;
      this.numeroPaginaD=1;
      this.getResultadoIndividual();
      this.getResultadoDobles();
    }
  }

  avanzarPagina(tipo: number){
    if(tipo===1)
    {
      if(this.numeroPaginaI < this.totalPaginasI)
         this.numeroPaginaI++;
         this.getResultadoIndividual();
    }
    else
    {
      if(this.numeroPaginaD < this.totalPaginasD)
        this.numeroPaginaD++;
        this.getResultadoDobles();
    }
  }

  regresarPagina(tipo: number) {
    if(tipo===1)
    {
      if(this.numeroPaginaI > 1)
      this.numeroPaginaI--;
      this.getResultadoIndividual();
    }
    else
    {
      if(this.numeroPaginaD > 1)
      this.numeroPaginaD--;
      this.getResultadoDobles();
    }
  }

  avanzarFinal(tipo: number)
  {
    if(tipo===1)
    {
      this.numeroPaginaI = this.totalPaginasI;
      this.getResultadoIndividual();
    }
    else
    {
      this.numeroPaginaD = this.totalPaginasD;
      this.getResultadoDobles();
    }
  }

  regresarPrincipio(tipo: number){
    if(tipo===1)
    {
      this.numeroPaginaI = 1;
      this.getResultadoIndividual();
    }
    else
    {
      this.numeroPaginaD = 1;
      this.getResultadoDobles();
    }
  }
}
