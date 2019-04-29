import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Jugador } from '../jugador';
import { JugadorService } from '../jugador.service';
import { Jugadora } from '../jugadora';
import { JugadoraService } from '../jugadora.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  private genero: string = "";
  private paisSeleccionado: string = null;
  private registrosPorPagina: number = 10;
  private numeroPaginaM: number = 1;
  private totalPaginasM: number;
  private numeroPaginaF: number = 1;
  private totalPaginasF: number;
  private filtradoPais: boolean = false;
  private numeroPaginasFiltradasM: number = 1;
  private totalPaginasFiltradasM: number;
  private numeroPaginasFiltradasF: number = 1;
  private totalPaginasFiltradasF: number;

  jugadores: Jugador[];
  jugadores$: Observable<Jugador[]>;
  jugadoras: Jugadora[];
  jugadoras$: Observable<Jugadora[]>;
  private searchTerms = new Subject<string>();

  constructor(private jugadorService: JugadorService, private jugadoraService: JugadoraService) {
   }

  ngOnInit() {
    this.getJugadores();
    this.getPaginasMasculino();
    this.getJugadoras();
    this.getPaginasFemenino();
    this.genero = "masculino";
    this.paisSeleccionado = null;

    this.jugadores$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => 
      this.jugadorService.searchJugadores(term))
    );
    this.jugadoras$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => 
      this.jugadoraService.searchJugadoras(term))
    );
  }

  getJugadores(): void {
    if(!this.filtradoPais)
    {
      let indice = (this.numeroPaginaM -1)*this.registrosPorPagina;
      this.jugadorService.getJugadores()
        .subscribe(jugadores => 
          this.jugadores = jugadores.filter(jugador => this.paisSeleccionado == null || this.paisSeleccionado == jugador.nacionalidad).slice(indice, indice+this.registrosPorPagina))
    }
    else
    {
      let indice = (this.numeroPaginasFiltradasM -1)*this.registrosPorPagina;
      this.jugadorService.getJugadores()
        .subscribe(jugadores => 
          this.jugadores = jugadores.filter(jugador => this.paisSeleccionado == null || this.paisSeleccionado == jugador.nacionalidad).slice(indice, indice+this.registrosPorPagina))
    }
  }

  getPaginasMasculino(): void {
    this.jugadorService.getJugadores().subscribe( jugadores =>
      {
        if(((jugadores.length/this.registrosPorPagina)-(Math.trunc(jugadores.length / this.registrosPorPagina)))==0)
          this.totalPaginasM = Math.trunc(jugadores.length / this.registrosPorPagina)
        else
          this.totalPaginasM = Math.trunc(jugadores.length / this.registrosPorPagina)+1
      }
    )
  }

  getPaginasFiltradasMasculino(): void {
    this.jugadorService.getJugadores().subscribe( jugadores =>
      {
        if(((jugadores.filter(jugador => this.paisSeleccionado == null || this.paisSeleccionado == jugador.nacionalidad).length/this.registrosPorPagina)-(Math.trunc(jugadores.filter(jugador => this.paisSeleccionado == null || this.paisSeleccionado == jugador.nacionalidad).length / this.registrosPorPagina)))==0)
          this.totalPaginasFiltradasM = Math.trunc(jugadores.filter(jugador => this.paisSeleccionado == null || this.paisSeleccionado == jugador.nacionalidad).length / this.registrosPorPagina)
        else
          this.totalPaginasFiltradasM = Math.trunc(jugadores.filter(jugador => this.paisSeleccionado == null || this.paisSeleccionado == jugador.nacionalidad).length / this.registrosPorPagina)+1
      }
    )
  }

  get paisesJugadores(): string[] {
    return this.jugadorService.getPaisesJugadores();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  getJugadoras(): void {
    if(!this.filtradoPais)
    {
      let indice = (this.numeroPaginaF -1)*this.registrosPorPagina;
      this.jugadoraService.getJugadoras()
        .subscribe(jugadoras => 
          this.jugadoras = jugadoras.filter(jugadora => this.paisSeleccionado == null || this.paisSeleccionado == jugadora.nacionalidad).slice(indice, indice+this.registrosPorPagina))
    } else
    {
      let indice = (this.numeroPaginasFiltradasF -1)*this.registrosPorPagina;
      this.jugadoraService.getJugadoras()
        .subscribe(jugadoras => 
          this.jugadoras = jugadoras.filter(jugadora => this.paisSeleccionado == null || this.paisSeleccionado == jugadora.nacionalidad).slice(indice, indice+this.registrosPorPagina))
    }
  }

  getPaginasFemenino(): void {
    this.jugadoraService.getJugadoras().subscribe( jugadoras =>
      {
        if(((jugadoras.length/this.registrosPorPagina)-(Math.trunc(jugadoras.length / this.registrosPorPagina)))==0)
          this.totalPaginasF = Math.trunc(jugadoras.length / this.registrosPorPagina)
        else
          this.totalPaginasF = Math.trunc(jugadoras.length / this.registrosPorPagina)+1
      }
    )
  }

  getPaginasFiltradasFemenino(): void {
    this.jugadoraService.getJugadoras().subscribe( jugadoras =>
      {
        if(((jugadoras.filter(jugadora => this.paisSeleccionado == null || this.paisSeleccionado == jugadora.nacionalidad).length/this.registrosPorPagina)-(Math.trunc(jugadoras.filter(jugadora => this.paisSeleccionado == null || this.paisSeleccionado == jugadora.nacionalidad).length / this.registrosPorPagina)))==0)
          this.totalPaginasFiltradasF = Math.trunc(jugadoras.filter(jugadora => this.paisSeleccionado == null || this.paisSeleccionado == jugadora.nacionalidad).length / this.registrosPorPagina)
        else
          this.totalPaginasFiltradasF = Math.trunc(jugadoras.filter(jugadora => this.paisSeleccionado == null || this.paisSeleccionado == jugadora.nacionalidad).length / this.registrosPorPagina)+1
      }
    )
  }

  get paisesJugadoras(): string[] {
    return this.jugadoraService.getPaisesJugadoras();
  }

  cambiarPaisSeleccionado(newPaisSeleccionado?: string) {
    if(newPaisSeleccionado=="")
    {
      this.paisSeleccionado=null;
      this.filtradoPais=false;
      this.numeroPaginasFiltradasM=1;
      this.numeroPaginasFiltradasF=1;
      this.getJugadores();
      this.getJugadoras();
    }
    else
    {
      this.paisSeleccionado = newPaisSeleccionado;
      this.filtradoPais=true;
      this.numeroPaginaM=1;
      this.numeroPaginaF=1;
      this.getPaginasFiltradasMasculino();
      this.getPaginasFiltradasFemenino();
      this.getJugadores();
      this.getJugadoras();
    }
  }

  avanzarPagina(genero: number) {
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        if(this.numeroPaginaM < this.totalPaginasM)
          this.numeroPaginaM++;
          this.getJugadores();
      }
      else
      {
        if(this.numeroPaginasFiltradasM < this.totalPaginasFiltradasM)
          this.numeroPaginasFiltradasM++;
          this.getJugadores();
      }
    }
    else
    {
      if(!this.filtradoPais)
      {
        if(this.numeroPaginaF < this.totalPaginasF)
          this.numeroPaginaF++;
          this.getJugadoras();
      }
      else
      {
        if(this.numeroPaginasFiltradasF < this.totalPaginasFiltradasF)
          this.numeroPaginasFiltradasF++;
          this.getJugadoras();
      }
    }
  }

  regresarPagina(genero: number) {
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        if(this.numeroPaginaM > 1)
        this.numeroPaginaM--;
        this.getJugadores();
      }
      else
      {
        if(this.numeroPaginasFiltradasM > 1)
        this.numeroPaginasFiltradasM--;
        this.getJugadores();
      }
    }
    else
    {
      if(!this.filtradoPais)
      {
        if(this.numeroPaginaF > 1)
          this.numeroPaginaF--;
          this.getJugadoras();
      }
      else
      {
        if(this.numeroPaginasFiltradasF > 1)
          this.numeroPaginasFiltradasF--;
          this.getJugadoras();
      }
    }
  }

  avanzarFinal(genero: number) {
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        this.numeroPaginaM = this.totalPaginasM;
        this.getJugadores();
      }
      else
      {
        this.numeroPaginasFiltradasM = this.totalPaginasFiltradasM;
        this.getJugadores();
      }
    }
    else
    {
      if(!this.filtradoPais)
      {
        this.numeroPaginaF = this.totalPaginasF;
        this.getJugadoras();
      }
      else
      {
        this.numeroPaginasFiltradasF = this.totalPaginasFiltradasF;
        this.getJugadoras();
      }
    }
  }

  regresarPrincipio(genero: number) {
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        this.numeroPaginaM = 1;
        this.getJugadores();
      }
      else
      {
        this.numeroPaginasFiltradasM = 1;
        this.getJugadores();
      }
    }
    else
    {
      if(!this.filtradoPais)
      {
        this.numeroPaginaF = 1;
        this.getJugadoras();
      }
      else
      {
        this.numeroPaginasFiltradasF = 1;
        this.getJugadoras();
      }
    }
  }

  resetGenero(generoSeleccionado: number) {
    if(generoSeleccionado===1)
    {
      this.genero='masculino'; 
      this.paisSeleccionado=null; 
      this.numeroPaginaM=1;
      this.filtradoPais=false;
      this.getJugadores();
      /*var selector = document.getElementById("select") as HTMLElement;
      selector.selectedIndex = 0;*/
    }
    else
    {
      this.genero='femenino'; 
      this.paisSeleccionado=null; 
      this.numeroPaginaF=1;
      this.filtradoPais=false;
      this.getJugadoras();
      /*var selector = document.getElementById("select") as HTMLElement;
      selector.selectedIndex = 0;*/
    }
  }
}
