import { Component, OnInit } from '@angular/core';
import { Versus } from 'src/app/versus';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  listaAux: Versus[] = [];

  constructor() { }

  ngOnInit() {

    this.getEncuentros();
  }

  ngAfterViewInit() {
    this.consultar();
  }
    getEncuentros(): void{
      let aux = localStorage.getItem('listaEncuentros');
      this.listaAux = (JSON.parse(aux));
    }

    consultar(): void{
      window.print();
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
        //alert('Usted a seleccionado a un jugador. ');
      }
  }


