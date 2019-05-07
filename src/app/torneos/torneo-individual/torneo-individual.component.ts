import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Torneo } from '../Torneos-Record';
import { TorneosRecordService } from '../torneos-record.service';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-torneo-individual',
  templateUrl: './torneo-individual.component.html',
  styleUrls: ['./torneo-individual.component.css']
})
export class TorneoIndividualComponent implements OnInit {

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
