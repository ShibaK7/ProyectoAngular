import { Injectable } from '@angular/core';

import { Jugador } from './jugador';
import { JUGADORES } from './lista-jugadores';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private jugadores: Jugador[] = [];
  private paisesJugadores: string[] = [];

  constructor(private listaJugadores: JUGADORES) {
    listaJugadores.getJugadores().subscribe(data => {
      this.jugadores = data;
      this.paisesJugadores = data.map(p => p.nacionalidad)
      .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
   }

  getJugadores(nacionalidad: string = null): Jugador[] {
    return this.jugadores.filter(jugador => nacionalidad == null || nacionalidad == jugador.nacionalidad);
  }

  getJugador(nombre: string): Jugador {
    return this.jugadores.find(jugador => jugador.nombre == nombre);
  }

  getPaisesJugadores(): string[] {
    return this.paisesJugadores;
  }
}
