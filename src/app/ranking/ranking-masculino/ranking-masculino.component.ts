import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { JugadorService } from '../../jugador.service';
import { Jugador } from '../../jugador';

@Component({
  selector: 'app-ranking-masculino',
  templateUrl: './ranking-masculino.component.html',
  styleUrls: ['./ranking-masculino.component.css']
})
export class RankingMasculinoComponent implements OnInit {

  private jugador: Jugador;
  private opcionSeleccionada: number;

  constructor(private route: ActivatedRoute, private jugadorService: JugadorService, private location: Location) { }

  ngOnInit() {
    this.getJugador();
    this.opcionSeleccionada = 1;
  }
  
  getJugador(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jugadorService.getJugador(id)
      .subscribe(jugador => this.jugador = jugador);
  }

  cambiarSeleccion(opcionElegida: number)
  {
    this.opcionSeleccionada = opcionElegida;
  }
}
