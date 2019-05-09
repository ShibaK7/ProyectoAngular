import { Component, OnInit, Input } from '@angular/core';

import { Jugadora } from 'src/app/jugadora';
import { Inscrito } from 'src/app/inscrito';
import { JugadoraService } from 'src/app/jugadora.service';
import { InscritoService } from 'src/app/inscrito.service';
import { Competencia } from 'src/app/competencia';

@Component({
  selector: 'app-inscripcion-individual-femenino',
  templateUrl: './inscripcion-individual-femenino.component.html',
  styleUrls: ['./inscripcion-individual-femenino.component.css']
})
export class InscripcionIndividualFemeninoComponent implements OnInit {

  @Input() competencia: Competencia;
  jugadoraSeleccionada: boolean;
  jugadoraEncontrada: Jugadora;
  jugadorasInscritas: Inscrito[] = [];
  jugadorasCertificadas: Jugadora[] = [];

  constructor(private jugadoraService: JugadoraService, private inscritoService: InscritoService) { }

  ngOnInit() {
    this.getJugadorasCertificadas();
    this.getJugadorasInscritas();
  }

  getJugadorasCertificadas(): void {
    this.jugadoraService.getJugadoras()
        .subscribe(jugadoras => 
          this.jugadorasCertificadas = jugadoras)
  }

  getJugadorasInscritas(): void {
    this.inscritoService.getInscritos()
    .subscribe(inscritas =>
      this.jugadorasInscritas = inscritas.filter(inscrito => this.competencia.id == inscrito.idCompetencia))
  }
}
