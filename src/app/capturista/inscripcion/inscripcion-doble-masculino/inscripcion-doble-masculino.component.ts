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
  selector: 'app-inscripcion-doble-masculino',
  templateUrl: './inscripcion-doble-masculino.component.html',
  styleUrls: ['./inscripcion-doble-masculino.component.css']
})
export class InscripcionDobleMasculinoComponent implements OnInit {

  @Input() competencia: Competencia;
  jugadorEncontrado1: Jugador = null;
  jugadorEncontrado2: Jugador = null;
  jugadoresInscritos: Inscrito[] = [];
  jugadoresCertificados: Jugador[] = [];
  errorIndicado1: number;
  errorIndicado2: number;
  todoForm: FormGroup = this.formBuilder.group({
    campoRegistro1: ['', Validators.required],
    campoRegistro2: ['', Validators.required],
    nombreEquipo: ['', Validators.required]
  })

  constructor(private jugadorService: JugadorService, private inscritoService: InscritoService,
    private competenciaService: CompetenciaService, private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit() {
    this.getJugadoresCertificados();
    this.getJugadoresInscritos();
    this.todoForm = this.formBuilder.group({
      campoRegistro1: ['', Validators.required],
      campoRegistro2: ['', Validators.required],
      nombreEquipo: ['', Validators.required]
    })
    this.errorIndicado1 = 4;
    this.errorIndicado2 = 4;
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

  getJugadorEncontrado1(id: number): void {
    this.jugadorService.getJugador(id)
      .subscribe(
        jugador => this.jugadorEncontrado1 = jugador,
        error => console.log(error),
        () => this.verificarInscripcion1())
  }

  getJugadorEncontrado2(id: number): void {
    this.jugadorService.getJugador(id)
      .subscribe(
        jugador => this.jugadorEncontrado2 = jugador,
        error => console.log(error),
        () => this.verificarInscripcion2())
  }

  verificarInscripcion1() {
    if (this.jugadoresInscritos.find(jugador => jugador.nombreJugador == this.jugadorEncontrado1.nombre)) {
      this.jugadorEncontrado1 = new Jugador();
      //jugador ya inscrito  
      this.errorIndicado1 = 2;
    }
    else {
      //todo bien
      this.errorIndicado1 = 0;
    }
  }

  verificarInscripcion2() {
    if (this.jugadoresInscritos.find(jugador => jugador.nombreJugador == this.jugadorEncontrado2.nombre)) {
      this.jugadorEncontrado2 = new Jugador();
      //jugador ya inscrito  
      this.errorIndicado2 = 2;
    }
    else {
      //todo bien
      this.errorIndicado2 = 0;
    }
  }

  comprobarJugador1(): void {
    console.log("Valor2= " + this.todoForm.controls['campoRegistro2'].value)

    if ((this.todoForm.controls['campoRegistro1'].value === this.todoForm.controls['campoRegistro2'].value) && this.todoForm.controls['campoRegistro1'].value != "") {
      //se intenta registrar al mismo jugador
      this.jugadorEncontrado1 = new Jugador();
      this.errorIndicado1 = 3;
    }
    else {
      if (this.jugadoresCertificados.find(jugador => jugador.id == this.todoForm.controls['campoRegistro1'].value)) {
        this.getJugadorEncontrado1(this.todoForm.controls['campoRegistro1'].value);
      }
      else {
        this.jugadorEncontrado1 = new Jugador();
        //jugador no encontrado
        this.errorIndicado1 = 1;
      }
    }
  }

  comprobarJugador2(): void {
    console.log("Valor1= " + this.todoForm.controls['campoRegistro1'].value)
    if ((this.todoForm.controls['campoRegistro2'].value === this.todoForm.controls['campoRegistro1'].value) && this.todoForm.controls['campoRegistro2'].value != "") {
      //se intenta registrar al mismo jugador
      this.jugadorEncontrado2 = new Jugador();
      this.errorIndicado2 = 3;
    }
    else {
      if (this.jugadoresCertificados.find(jugador => jugador.id == this.todoForm.controls['campoRegistro2'].value)) {
        this.getJugadorEncontrado2(this.todoForm.controls['campoRegistro2'].value);
      }
      else {
        this.jugadorEncontrado2 = new Jugador();
        //jugador no encontrado
        this.errorIndicado2 = 1;
      }
    }
  }

  onSubmit() {
    this.comprobarJugador1();
    this.comprobarJugador2();
  }

  registrar() {
    let inscrito1 = new Inscrito(this.competencia.id, this.jugadorEncontrado1.nombre, null, this.todoForm.controls['nombreEquipo'].value);

    this.inscritoService.addInscrito(inscrito1).subscribe(
      inscrito1 => this.jugadoresInscritos.push(inscrito1)
    )

    let inscrito2 = new Inscrito(this.competencia.id, this.jugadorEncontrado2.nombre, null, this.todoForm.controls['nombreEquipo'].value);

    this.inscritoService.addInscrito(inscrito2).subscribe(
      inscrito2 => this.jugadoresInscritos.push(inscrito2)
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
