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
  selector: 'app-inscripcion-individual-femenino',
  templateUrl: './inscripcion-individual-femenino.component.html',
  styleUrls: ['./inscripcion-individual-femenino.component.css']
})
export class InscripcionIndividualFemeninoComponent implements OnInit {

  @Input() competencia: Competencia;
  jugadoraEncontrada: Jugadora;
  jugadorasInscritas: Inscrito[] = [];
  jugadorasCertificadas: Jugadora[] = [];
  errorIndicado: number;
  todoForm: FormGroup;

  constructor(private jugadoraService: JugadoraService, private inscritoService: InscritoService, 
    private competenciaService: CompetenciaService, private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit() {
    this.getJugadorasCertificadas();
    this.getJugadorasInscritas();
    this.todoForm = this.formBuilder.group({
      campoRegistro: ['', Validators.required]
    })
    this.errorIndicado = 3;
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

  getJugadoraEncontrada(id: number): void {
    this.jugadoraService.getJugadora(id)
    .subscribe(
      jugadora => this.jugadoraEncontrada = jugadora,
      error => console.log(error),
      () => this.verificarInscripcion())
  }

  verificarInscripcion() {
    if(this.jugadorasInscritas.find(jugadora => jugadora.nombreJugadora == this.jugadoraEncontrada.nombre))
    {
      this.jugadoraEncontrada = new Jugadora();
      //jugadora ya inscrita  
      this.errorIndicado = 2;  
    }
    else
    {
      //todo bien
      this.errorIndicado = 0;
    }
  }

  comprobarJugadora(): void {
    if(this.jugadorasCertificadas.find(jugadora => jugadora.id == this.todoForm.controls['campoRegistro'].value))
    {
      this.getJugadoraEncontrada(this.todoForm.controls['campoRegistro'].value); 
    }
    else
    {
      this.jugadoraEncontrada = new Jugadora();
      //jugadora no encontrada
      this.errorIndicado = 1;
    }
  }

  registrar() {
    let inscrito = new Inscrito(this.competencia.id, null, this.jugadoraEncontrada.nombre, null);

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
