import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Competencia } from 'src/app/competencia';
import { CompetenciaService } from 'src/app/competencia.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  competencia: Competencia;

  constructor(private route: ActivatedRoute, private competenciaService: CompetenciaService, 
    private locatio: Location) { }

  ngOnInit() {
    this.getCompetencia();
  }

  getCompetencia(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.competenciaService.getCompetencia(id)
    .subscribe(competencia => {
      this.competencia = competencia;
    })
  }
}
