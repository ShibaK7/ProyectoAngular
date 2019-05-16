import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common'

import { Jugadora } from 'src/app/jugadora';
import { Inscrito } from 'src/app/inscrito';
import { JugadoraService } from 'src/app/jugadora.service';
import { InscritoService } from 'src/app/inscrito.service';
import { Competencia } from 'src/app/competencia';
import { CompetenciaService } from 'src/app/competencia.service';

@Component({
  selector: 'app-inscripcion-doble-femenino',
  templateUrl: './inscripcion-doble-femenino.component.html',
  styleUrls: ['./inscripcion-doble-femenino.component.css']
})
export class InscripcionDobleFemeninoComponent implements OnInit {

  @Input() competencia: Competencia;
  jugadoraEncontrada1: Jugadora = null;
  jugadoraEncontrada2: Jugadora = null;
  jugadorasInscritas: Inscrito[] = [];
  jugadorasCertificadas: Jugadora[] = [];
  errorIndicado1: number;
  errorIndicado2: number;
  todoForm: FormGroup = this.formBuilder.group({
    campoRegistro1: ['', Validators.required],
    campoRegistro2: ['', Validators.required],
    nombreEquipo: ['', Validators.required]
  })

  constructor(private jugadoraService: JugadoraService, private inscritoService: InscritoService,
    private competenciaService: CompetenciaService, private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit() {
    this.getJugadorasCertificadas();
    this.getJugadorasInscritas();
    this.todoForm = this.formBuilder.group({
      campoRegistro1: ['', Validators.required],
      campoRegistro2: ['', Validators.required],
      nombreEquipo: ['', Validators.required]
    })
    this.errorIndicado1 = 4;
    this.errorIndicado2 = 4;
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

  getJugadoraEncontrada1(id: number): void {
    this.jugadoraService.getJugadora(id)
      .subscribe(
        jugadora => this.jugadoraEncontrada1 = jugadora,
        error => console.log(error),
        () => this.verificarInscripcion1())
  }

  getJugadoraEncontrada2(id: number): void {
    this.jugadoraService.getJugadora(id)
      .subscribe(
        jugadora => this.jugadoraEncontrada2 = jugadora,
        error => console.log(error),
        () => this.verificarInscripcion2())
  }

  verificarInscripcion1() {
    if (this.jugadorasInscritas.find(jugadora => jugadora.nombreJugadora == this.jugadoraEncontrada1.nombre)) {
      this.jugadoraEncontrada1 = new Jugadora();
      //jugadora ya inscrita
      this.errorIndicado1 = 2;
    }
    else {
      //todo bien
      this.errorIndicado1 = 0;
    }
  }

  verificarInscripcion2() {
    if (this.jugadorasInscritas.find(jugadora => jugadora.nombreJugadora == this.jugadoraEncontrada2.nombre)) {
      this.jugadoraEncontrada2 = new Jugadora();
      //jugadora ya inscrita
      this.errorIndicado2 = 2;
    }
    else {
      //todo bien
      this.errorIndicado2 = 0;
    }
  }

  comprobarJugadora1(): void {
    if ((this.todoForm.controls['campoRegistro1'].value === this.todoForm.controls['campoRegistro2'].value) && this.todoForm.controls['campoRegistro1'].value != "") {
      //se intenta registrar a la misma jugadora
      this.jugadoraEncontrada1 = new Jugadora();
      this.errorIndicado1 = 3;
    }
    else {
      if (this.jugadorasCertificadas.find(jugadora => jugadora.id == this.todoForm.controls['campoRegistro1'].value)) {
        this.getJugadoraEncontrada1(this.todoForm.controls['campoRegistro1'].value);
      }
      else {
        this.jugadoraEncontrada1 = new Jugadora();
        //jugadora no encontrada
        this.errorIndicado1 = 1;
      }
    }
  }

  comprobarJugadora2(): void {
    if ((this.todoForm.controls['campoRegistro2'].value === this.todoForm.controls['campoRegistro1'].value) && this.todoForm.controls['campoRegistro2'].value != "") {
      //se intenta registrar a la misma jugadora
      this.jugadoraEncontrada2 = new Jugadora();
      this.errorIndicado2 = 3;
    }
    else {
      if (this.jugadorasCertificadas.find(jugadora => jugadora.id == this.todoForm.controls['campoRegistro2'].value)) {
        this.getJugadoraEncontrada2(this.todoForm.controls['campoRegistro2'].value);
      }
      else {
        this.jugadoraEncontrada2 = new Jugadora();
        //jugadora no encontrada
        this.errorIndicado2 = 1;
      }
    }
  }

  onSubmit() {
    this.comprobarJugadora1();
    this.comprobarJugadora2();
  }

  registrar() {
    let inscrita1 = new Inscrito(this.competencia.id, null, this.jugadoraEncontrada1.nombre, this.todoForm.controls['nombreEquipo'].value);

    this.inscritoService.addInscrito(inscrita1).subscribe(
      inscrita1 => this.jugadorasInscritas.push(inscrita1)
    )

    let inscrita2 = new Inscrito(this.competencia.id, null, this.jugadoraEncontrada2.nombre, this.todoForm.controls['nombreEquipo'].value);

    this.inscritoService.addInscrito(inscrita2).subscribe(
      inscrita2 => this.jugadorasInscritas.push(inscrita2)
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
          this.jugadoraEncontrada1 = new Jugadora();
          this.errorIndicado1 = 4;
          this.jugadoraEncontrada2 = new Jugadora();
          this.errorIndicado2= 4;
        }
      }
    )
  }

  goBack(): void {
    this.location.back();
  }
}
