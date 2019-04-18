import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private jugadorService: JugadorService, private jugadoraService: JugadoraService) {
   }

  ngOnInit() {
    this.genero = "masculino";
    this.paisSeleccionado = null;
    this.totalPaginasM = this.jugadorService.getJugadores().length / this.registrosPorPagina;
    this.totalPaginasF = this.jugadoraService.getJugadoras().length / this.registrosPorPagina;
  }

  get jugadores(): Jugador[] {
    let indice = (this.numeroPaginaM -1)*this.registrosPorPagina;

    return this.jugadorService.getJugadores(this.paisSeleccionado).slice(indice, indice+this.registrosPorPagina);
  }

  get paisesJugadores(): string[] {
    return this.jugadorService.getPaisesJugadores();
  }

  get jugadoras(): Jugadora[] {
    let indice = (this.numeroPaginaF -1)*this.registrosPorPagina;

    return this.jugadoraService.getJugadoras(this.paisSeleccionado).slice(indice, indice+this.registrosPorPagina);
  }

  get paisesJugadoras(): string[] {
    return this.jugadoraService.getPaisesJugadoras();
  }

  cambiarPaisSeleccionado(newPaisSeleccionado?: string) {
    if(newPaisSeleccionado=="")
    {
      this.paisSeleccionado=null;
      this.filtradoPais=false;
    }
    else
    {
      this.paisSeleccionado = newPaisSeleccionado;
      this.filtradoPais=true;
      this.numeroPaginaM=1;
      this.numeroPaginaF=1;
    }
  }

  buscarJugador(nombre: string) {
    console.log(this.jugadorService.getJugador(nombre).ranking);
  }
    
  /*get paginaJugadores(): number[] {
    return Array(Math.ceil(this.jugadorService.getJugadores(this.paisSeleccionado).length / this.registrosPorPagina)).fill(0).map((x, i) => i + 1);
  }*/

  /*get paginaJugadoras(): number[] {
    return Array(Math.ceil(this.jugadoraService.getJugadoras(this.paisSeleccionado).length / this.registrosPorPagina)).fill(0).map((x, i) => i + 1);
  }*/

  avanzarPagina(genero: number) {
    if(genero===1)
    {
      if(this.numeroPaginaM < this.totalPaginasM)
        this.numeroPaginaM++;
    }
    else
    {
      if(this.numeroPaginaF < this.totalPaginasF)
        this.numeroPaginaF++;
    }
  }

  regresarPagina(genero: number) {
    if(genero===1)
    {
      if(this.numeroPaginaM > 1)
      this.numeroPaginaM--;
    }
    else
    {
      if(this.numeroPaginaF > 1)
      this.numeroPaginaF--;
    }
  }

  avanzarFinal(genero: number) {
    if(genero===1)
    {
      this.numeroPaginaM = this.totalPaginasM;
    }
    else
    {
      this.numeroPaginaF = this.totalPaginasF;
    }
  }

  regresarPrincipio(genero: number) {
    if(genero===1)
    {
      this.numeroPaginaM = 1;
    }
    else
    {
      this.numeroPaginaF = 1;
    }
  }

  resetGenero(generoSeleccionado: number) {
    if(generoSeleccionado===1)
    {
      this.genero='masculino'; 
      this.paisSeleccionado=null; 
      this.numeroPaginaM=1;
      this.filtradoPais=false;
    }
    else
    {
      this.genero='femenino'; 
      this.paisSeleccionado=null; 
      this.numeroPaginaF=1;
      this.filtradoPais=false;
    }
  }
}
