import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { JugadorService } from '../jugador.service';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-ranking2',
  templateUrl: './ranking2.component.html',
  styleUrls: ['./ranking2.component.css']
})
export class Ranking2Component implements OnInit {

  jugador: Jugador;

  constructor(private route: ActivatedRoute, private jugadorService: JugadorService, private location: Location) { }

  ngOnInit(): void {
    this.getJugador();
  }
  
  getJugador(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jugadorService.getJugador(id)
      .subscribe(jugador => this.jugador = jugador);
  }
}
