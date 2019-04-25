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
  private registrosPorPagina: number = 5;
  private numeroPaginaM: number = 1;
  private totalPaginasM: number;
  private numeroPaginaF: number = 1;
  private totalPaginasF: number;
  private filtradoPais: boolean = false;

  jugadores: Jugador[];
  jugadores$: Observable<Jugador[]>;
  private searchTerms = new Subject<string>();

  busqueda$: Observable<any[]>;

  jugadoras: Jugadora[];
  jugadoras$: Observable<Jugadora[]>;

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
    let indice = (this.numeroPaginaM -1)*this.registrosPorPagina;

    this.jugadorService.getJugadores()
        .subscribe(jugadores => 
          this.jugadores = jugadores.filter(jugador => this.paisSeleccionado == null || this.paisSeleccionado == jugador.nacionalidad).slice(indice, indice+this.registrosPorPagina))
  }

  getPaginasMasculino(): void {
    this.jugadorService.getJugadores().subscribe( jugadores =>
      this.totalPaginasM = jugadores.length / this.registrosPorPagina
    )
  }

  get paisesJugadores(): string[] {
    return this.jugadorService.getPaisesJugadores();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  getJugadoras(): void {
    let indice = (this.numeroPaginaF -1)*this.registrosPorPagina;

    this.jugadoraService.getJugadoras()
        .subscribe(jugadoras => 
          this.jugadoras = jugadoras.filter(jugadora => this.paisSeleccionado == null || this.paisSeleccionado == jugadora.nacionalidad).slice(indice, indice+this.registrosPorPagina))
  }

  getPaginasFemenino(): void {
    this.jugadoraService.getJugadoras().subscribe( jugadoras =>
      this.totalPaginasF = jugadoras.length / this.registrosPorPagina
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
      this.getJugadores();
      this.getJugadoras();
    }
    else
    {
      this.paisSeleccionado = newPaisSeleccionado;
      this.filtradoPais=true;
      this.numeroPaginaM=1;
      this.numeroPaginaF=1;
      this.getJugadores();
      this.getJugadoras();
    }
  }

  avanzarPagina(genero: number) {
    if(genero===1)
    {
      if(this.numeroPaginaM < this.totalPaginasM)
        this.numeroPaginaM++;
        this.getJugadores();
    }
    else
    {
      if(this.numeroPaginaF < this.totalPaginasF)
        this.numeroPaginaF++;
        this.getJugadoras();
    }
  }

  regresarPagina(genero: number) {
    if(genero===1)
    {
      if(this.numeroPaginaM > 1)
      this.numeroPaginaM--;
      this.getJugadores();
    }
    else
    {
      if(this.numeroPaginaF > 1)
      this.numeroPaginaF--;
      this.getJugadoras();
    }
  }

  avanzarFinal(genero: number) {
    if(genero===1)
    {
      this.numeroPaginaM = this.totalPaginasM;
      this.getJugadores();
    }
    else
    {
      this.numeroPaginaF = this.totalPaginasF;
      this.getJugadoras();
    }
  }

  regresarPrincipio(genero: number) {
    if(genero===1)
    {
      this.numeroPaginaM = 1;
      this.getJugadores();
    }
    else
    {
      this.numeroPaginaF = 1;
      this.getJugadoras();
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
    }
    else
    {
      this.genero='femenino'; 
      this.paisSeleccionado=null; 
      this.numeroPaginaF=1;
      this.filtradoPais=false;
      this.getJugadoras();
    }
  }
}
