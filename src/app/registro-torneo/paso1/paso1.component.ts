import { Component, OnInit} from '@angular/core';
import { RTorneo } from '../../r-torneo';
import { NgForm } from '@angular/forms';
import { Torneo } from '../../torneos/Torneos-Record';
import { TorneosRecordService } from '../../torneos/torneos-record.service'



@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css']
})

export class Paso1Component implements OnInit{

  torneos: Torneo[];


  torneoSent: boolean = false;
  enviar: boolean = false;

  nombren: string;
  seden: string;
  canchan: string;
  descripcionn: string;
  financiamienton: string;
  torneoInicion: string;
  torneoFinaln: string;
  inscripcionInicion: string;
  inscripcionFinaln: string;

  constructor(private torneoService: TorneosRecordService){}

  ngOnInit()
  {
   this.getTorneos(); 
  }

 
  sedes = ['Sede 1', 'Sede 2', 'Sede 3', 'Sede 4'];
  canchas = ['Cancha1', 'Cancha2', 'Cancha3', 'Cancha4', 'Cancha5'];

  model= new RTorneo(1, 'Torneo1', this.sedes[0], this.canchas[0], 'Descripción', '$4000', '12-05-1998', '12-05-19981', '12-05-1998', '12-05-1998');

  submitted= false;

  onSubmit()
  { 
    console.log("Se esta enviando");
    this.submitted = true; 
    let nuevoTorneo = new Torneo(this.model.nombre, this.model.sede, this.model.cancha, this.model.descripcion, this.model.financiamiento,
      this.model.torneoInicio, this.model.torneoFinal,this.model.inscripcionInicio, this.model.inscripcionFinal);
    this.torneoService.addTorneo(nuevoTorneo).subscribe(
      nuevoTorneo => this.torneos.push(nuevoTorneo))
    
  }

  registrar()
  {
    
  }



  getTorneos(): void {
    this.torneoService.getTorneos()
      .subscribe(torneos =>
        this.torneos = torneos)
  }

  get diagnostic() { return JSON.stringify(this.model);}


  newTorneo()
  {
    this.model = new RTorneo(1, '', '', '', '','','','','','');
  }

 
}
