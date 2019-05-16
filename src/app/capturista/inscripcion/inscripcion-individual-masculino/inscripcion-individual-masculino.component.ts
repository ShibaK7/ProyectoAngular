import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common'

import { Jugador } from 'src/app/jugador';
import { Inscrito } from 'src/app/inscrito';
import { JugadorService } from 'src/app/jugador.service';
import { InscritoService } from 'src/app/inscrito.service';
import { Competencia } from 'src/app/competencia';
import { CompetenciaService } from 'src/app/competencia.service';

@Component({
  selector: 'app-inscripcion-individual-masculino',
  templateUrl: './inscripcion-individual-masculino.component.html',
  styleUrls: ['./inscripcion-individual-masculino.component.css']
})
export class InscripcionIndividualMasculinoComponent implements OnInit {

  @Input() competencia: Competencia;
  jugadorEncontrado: Jugador;
  jugadoresInscritos: Inscrito[] = [];
  jugadoresCertificados: Jugador[] = [];
  errorIndicado: number;
  todoForm: FormGroup;

  constructor(private jugadorService: JugadorService, private inscritoService: InscritoService, 
    private competenciaService: CompetenciaService, private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit() {
    this.getJugadoresCertificados();
    this.getJugadoresInscritos();
    this.todoForm = this.formBuilder.group({
      campoRegistro: ['', Validators.required]
    })
    this.errorIndicado = 3;
  }

  getJugadoresCertificados(): void {
    this.jugadorService.getJugadores()
        .subscribe(jugadores => 
          this.jugadoresCertificados = jugadores)
  }

  getJugadoresInscritos(): void {
    this.inscritoService.getInscritos()
    .subscribe(inscritos =>
      this.jugadoresInscritos = inscritos.filter(inscrito => this.competencia.id == inscrito.idCompetencia))
  }

  getJugadorEncontrado(id: number): void {
    this.jugadorService.getJugador(id)
    .subscribe(
      jugador => this.jugadorEncontrado = jugador,
      error => console.log(error),
      () => this.verificarInscripcion())
  }

  verificarInscripcion() {
    if(this.jugadoresInscritos.find(jugador => jugador.nombreJugador == this.jugadorEncontrado.nombre))
    {
      this.jugadorEncontrado = new Jugador();
      //jugadora ya inscrita  
      this.errorIndicado = 2;  
    }
    else
    {
      //todo bien
      this.errorIndicado = 0;
    }
  }

  comprobarJugador(): void {
    if(this.jugadoresCertificados.find(jugador => jugador.id == this.todoForm.controls['campoRegistro'].value))
    {
      this.getJugadorEncontrado(this.todoForm.controls['campoRegistro'].value); 
    }
    else
    {
      this.jugadorEncontrado = new Jugador();
      //jugadora no encontrada
      this.errorIndicado = 1;
    }
  }

  registrar() {
    let inscrito = new Inscrito(this.competencia.id, this.jugadorEncontrado.nombre, null, null);

    this.inscritoService.addInscrito(inscrito).subscribe(
      inscrito => this.jugadoresInscritos.push(inscrito)
    )

    this.competencia.lugaresOcupados = this.competencia.lugaresOcupados + 1;

    this.competenciaService.updateCompetencia(this.competencia).subscribe(
      () =>  {
        if(this.competencia.lugaresOcupados == this.competencia.cupo)
        {
          this.goBack();
        }
        else
        {
          this.todoForm.reset();
          this.jugadorEncontrado = new Jugador();
          this.errorIndicado = 3;
        }
      }
    )
  }

  goBack(): void {
    this.location.back();
  }
}
