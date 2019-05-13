import { Component, OnInit, Version } from '@angular/core';
import { Versus } from 'src/app/versus';

@Component({
  selector: 'app-llave',
  templateUrl: './llave.component.html',
  styleUrls: ['./llave.component.css']
})
export class LlaveComponent implements OnInit {
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
    console.log(this.listaAux);
    console.log(this.listaAux[0].nombreJugador1);
  }

        // Drag and Drop

        dragStart(ev) {
          ev.dataTransfer.setData("Text", ev.target.id);
          //document.getElementById("demo").innerHTML = "Started to drag the p element";
        }
        
         dragEnd(ev) {
          //document.getElementById("demo").innerHTML = "Finished dragging the p element.";
        }
        
         allowDrop(ev) {
          ev.preventDefault();
        }
        
         drop(ev) {
          ev.preventDefault();
          var data = ev.dataTransfer.getData("Text");
          console.log(data);
          ev.target.appendChild(document.getElementById(data));
          //document.getElementById("demo").innerHTML = "The p element was dropped";
          //alert('Usted a seleccionado a un jugador. ');
        }

        
}
