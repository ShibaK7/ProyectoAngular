import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Torneo } from '../../Torneos-Record';
import { TorneosRecordService } from '../../torneos-record.service';



import { Jugador } from '../../../jugador';
import { JugadorService } from '../../../jugador.service';
// import { Jugadora } from '../../../jugadora';
// import { JugadoraService } from '../../../jugadora.service';



@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {


  private jugadores: Jugador[] ;
  private torneos : Torneo[] ;


  // jugadores$: Observable<Jugador[]>;
  // jugadoras: Jugadora[];
  // jugadoras$: Observable<Jugadora[]>;


  // allowDrop(ev) {
  //   ev.preventDefault();
  // }

  // drag(ev) {
  //   ev.dataTransfer.setData("text", ev.target.id);
  // }

  // drop(ev) {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   ev.target.appendChild(document.getElementById(data));
  // }





  constructor(private jugadorService: JugadorService, private torneosRecordService: TorneosRecordService) { }

  ngOnInit() {

  }



  

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
  }

  


}
