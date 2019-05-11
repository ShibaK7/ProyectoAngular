import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common'

import { Jugador } from 'src/app/jugador';
import { Jugadora } from 'src/app/jugadora';
import { Inscrito } from 'src/app/inscrito';
import { JugadorService } from 'src/app/jugador.service';
import { JugadoraService } from 'src/app/jugadora.service';
import { InscritoService } from 'src/app/inscrito.service';
import { Competencia } from 'src/app/competencia';
import { CompetenciaService } from 'src/app/competencia.service';

@Component({
  selector: 'app-inscripcion-doble-mixto',
  templateUrl: './inscripcion-doble-mixto.component.html',
  styleUrls: ['./inscripcion-doble-mixto.component.css']
})
export class InscripcionDobleMixtoComponent implements OnInit {

  @Input() competencia: Competencia;
  jugadorEncontrado: Jugador = null;
  jugadoraEncontrada: Jugadora = null;
  jugadorasInscritas: Inscrito[] = [];
  jugadoresCertificados: Jugador[] = [];
  jugadorasCertificadas: Jugadora[] = [];
  errorIndicado1: number;
  errorIndicado2: number;
  todoForm: FormGroup = this.formBuilder.group({
    campoRegistro1: ['', Validators.required],
    campoRegistro2: ['', Validators.required],
    nombreEquipo: ['', Validators.required]
  })

  constructor(private jugadorService: JugadorService, private jugadoraService: JugadoraService, private inscritoService: InscritoService,
    private competenciaService: CompetenciaService, private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit() {
    this.getJugadoresCertificados();
    this.getJugadorasCertificadas();
    this.getJugadorasInscritas();
    this.todoForm = this.formBuilder.group({
      campoRegistro1: ['', Validators.required],
      campoRegistro2: ['', Validators.required],
      nombreEquipo: ['', Validators.required]
    })
    this.errorIndicado1 = 3;
    this.errorIndicado2 = 3;
  }

  getJugadoresCertificados(): void {
    this.jugadorService.getJugadores()
      .subscribe(jugadores =>
        this.jugadoresCertificados = jugadores)
  }

  getJugadorasCertificadas(): void {
    this.jugadoraService.getJugadoras()
      .subscribe(jugadoras =>
        this.jugadorasCertificadas = jugadoras)
  }

  getJugadorasInscritas(): void {
    this.inscritoService.getInscritos()
      .subscribe(inscritas =>
        this.jugadorasInscritas = inscritas.filter(inscrita => this.competencia.id == inscrita.idCompetencia))
  }

  getJugadorEncontrado(id: number): void {
    this.jugadorService.getJugador(id)
      .subscribe(
        jugador => this.jugadorEncontrado = jugador,
        error => console.log(error),
        () => this.verificarInscripcion1())
  }

  getJugadoraEncontrada(id: number): void {
    this.jugadoraService.getJugadora(id)
      .subscribe(
        jugadora => this.jugadoraEncontrada = jugadora,
        error => console.log(error),
        () => this.verificarInscripcion2())
  }

  verificarInscripcion1() {
    if (this.jugadorasInscritas.find(jugador => jugador.nombreJugador == this.jugadorEncontrado.nombre)) {
      this.jugadorEncontrado = new Jugador();
      //jugador ya inscrito
      this.errorIndicado1 = 2;
    }
    else {
      //todo bien
      this.errorIndicado1 = 0;
    }
  }

  verificarInscripcion2() {
    if (this.jugadorasInscritas.find(jugadora => jugadora.nombreJugadora == this.jugadoraEncontrada.nombre)) {
      this.jugadoraEncontrada = new Jugadora();
      //jugadora ya inscrita
      this.errorIndicado2 = 2;
    }
    else {
      //todo bien
      this.errorIndicado2 = 0;
    }
  }

  comprobarJugador(): void {
    if (this.jugadoresCertificados.find(jugador => jugador.id == this.todoForm.controls['campoRegistro1'].value)) {
      this.getJugadorEncontrado(this.todoForm.controls['campoRegistro1'].value);
    }
    else {
      this.jugadorEncontrado = new Jugador();
      //jugador no encontrado
      this.errorIndicado1 = 1;
    }
  }

  comprobarJugadora(): void {
    if (this.jugadorasCertificadas.find(jugadora => jugadora.id == this.todoForm.controls['campoRegistro2'].value)) {
      this.getJugadoraEncontrada(this.todoForm.controls['campoRegistro2'].value);
    }
    else {
      this.jugadoraEncontrada = new Jugadora();
      //jugadora no encontrada
      this.errorIndicado2 = 1;
    }
  }

  onSubmit() {
    this.comprobarJugador();
    this.comprobarJugadora();
  }

  registrar() {
    let inscrita = new Inscrito(this.competencia.id, null, this.jugadoraEncontrada.nombre, this.todoForm.controls['nombreEquipo'].value);

    this.inscritoService.addInscrito(inscrita).subscribe(
      inscrita => this.jugadorasInscritas.push(inscrita)
    )

    let inscrito = new Inscrito(this.competencia.id, this.jugadorEncontrado.nombre, null, this.todoForm.controls['nombreEquipo'].value);

    this.inscritoService.addInscrito(inscrito).subscribe(
      inscrito => this.jugadorasInscritas.push(inscrito)
    )

    this.competencia.lugaresOcupados = this.competencia.lugaresOcupados + 1;

    this.competenciaService.updateCompetencia(this.competencia).subscribe(
      () => this.goBack()
    )
  }

  goBack(): void {
    this.location.back();
  }
}
