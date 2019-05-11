import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Competencia } from '../../competencia';
import { CompetenciaService } from '../../competencia.service';
import { Inscrito } from '../../inscrito';
import { InscritoService } from '../../inscrito.service';

@Component({
  selector: 'app-enfrentamiento',
  templateUrl: './enfrentamiento.component.html',
  styleUrls: ['./enfrentamiento.component.css']
})
export class EnfrentamientoComponent implements OnInit {

  competencia: Competencia;
  listaCompetidores: Inscrito[] = [];

  constructor(private route: ActivatedRoute, private competenciaService: CompetenciaService, 
    private inscritoService: InscritoService, private location: Location) { }

    ngOnInit() {
      this.getCompetencia();    
    }
  
    ngAfterViewInit() {
      this.getListaCompetidores();
    }
  
    getCompetencia(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.competenciaService.getCompetencia(id)
      .subscribe(competencia => {
        this.competencia = competencia;
      })
    }
  
    getListaCompetidores(): void {
      this.inscritoService.getInscritos()
      .subscribe(inscritos =>
        this.listaCompetidores = inscritos.filter(inscrito => this.competencia.id == inscrito.idCompetencia))
    }

}
