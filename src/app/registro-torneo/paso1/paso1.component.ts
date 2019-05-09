import { Component} from '@angular/core';
import { RTorneo } from '../../r-torneo';


@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css']
})

export class Paso1Component {

  sedes = ['Sede 1', 'Sede 2', 'Sede 3', 'Sede 4'];
  canchas = ['Cancha1', 'Cancha2', 'Cancha3', 'Cancha4', 'Cancha5'];

  model= new RTorneo(1, 'Torneo1', this.sedes[0], this.canchas[0], 'Descripción');

  submitted= false;

  onSubmit(){ this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model);}

  newTorneo()
  {
    this.model = new RTorneo(1, '', '', '', '');
  }
}
