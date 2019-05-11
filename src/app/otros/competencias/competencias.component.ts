import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

import { TorneosRecordService } from '../../torneos/torneos-record.service';
import { Torneo } from '../../torneos/Torneos-Record';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  private torneo: Torneo;
  private opcionSeleccionada: number;

  

  constructor(private route: ActivatedRoute, private torneosRecordService: TorneosRecordService, private location: Location) { }

  ngOnInit() {
    this.getTorneo();
    this.opcionSeleccionada = 1;  
  }

  getTorneo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.torneosRecordService.getTorneo(id)
      .subscribe(torneo => this.torneo = torneo);
  }

  cambiarSeleccion(opcionElegida: number)
  {
    this.opcionSeleccionada = opcionElegida;
  }

}
