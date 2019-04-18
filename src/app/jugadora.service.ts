import { Injectable } from '@angular/core';
import { Jugadora } from './jugadora';
import { JUGADORAS } from './lista-jugadoras';

@Injectable({
  providedIn: 'root'
})
export class JugadoraService {

  private jugadoras: Jugadora[] = [];
  private paisesJugadoras: string[] = [];

  constructor(private listaJugadores: JUGADORAS) {
    listaJugadores.getJugadoras().subscribe(data => {
      this.jugadoras = data;
      this.paisesJugadoras = data.map(p => p.nacionalidad)
      .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
   }

  getJugadoras(nacionalidad: string = null): Jugadora[] {
    return this.jugadoras.filter(jugador => nacionalidad == null || nacionalidad == jugador.nacionalidad);
  }

  getJugadora(id: number): Jugadora {
    return this.jugadoras.find(jugador => jugador.id == id);
  }

  getPaisesJugadoras(): string[] {
    return this.paisesJugadoras;
  }
}
