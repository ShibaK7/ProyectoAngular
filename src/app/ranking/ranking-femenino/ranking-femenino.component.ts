import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { JugadoraService } from '../../jugadora.service';
import { Jugadora } from '../../jugadora';

@Component({
  selector: 'app-ranking-femenino',
  templateUrl: './ranking-femenino.component.html',
  styleUrls: ['./ranking-femenino.component.css']
})
export class RankingFemeninoComponent implements OnInit {

  jugadora: Jugadora;
  private opcionSeleccionada: number;

  constructor(private route: ActivatedRoute, private jugadoraService: JugadoraService, private location: Location) { }

  ngOnInit() {
    this.getJugadora();
    this.opcionSeleccionada = 1;
  }

  getJugadora(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jugadoraService.getJugadora(id)
      .subscribe(jugadora => this.jugadora = jugadora);
  }

  cambiarSeleccion(opcionElegida: number)
  {
    this.opcionSeleccionada = opcionElegida;
  }
}
