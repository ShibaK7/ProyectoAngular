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

      // Drag and Drop

      dragStart(ev) {
        ev.dataTransfer.setData("Text", ev.target.id);
        document.getElementById("demo").innerHTML = "Started to drag the p element";
      }
      
       dragEnd(ev) {
        document.getElementById("demo").innerHTML = "Finished dragging the p element.";
      }
      
       allowDrop(ev) {
        ev.preventDefault();
      }
      
       drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
        document.getElementById("demo").innerHTML = "The p element was dropped";
        alert('Usted a seleccionado a un jugador. ');
      }
}
