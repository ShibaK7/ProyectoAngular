import { Component, OnInit, Input } from '@angular/core';

import { TorneosRecordService } from './torneos-record.service';

import { Torneo } from './Torneos-Record';



declare const myTest: any;
declare var $: any;

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {


  constructor(private torneosRecordService: TorneosRecordService) { }

  ngOnInit() {
  // POP UP
    var modal = document.getElementById('modal-wrapper');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    this.getTorneos();

  }


  getTorneos(): void {
    this.torneosRecordService.getTorneos().subscribe(torneos=>this.torneos = torneos);
  }




  torneos : Torneo[] ;



}
