import { Component, OnInit } from '@angular/core';
import { Versus } from 'src/app/versus';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  listaAux: Versus[] = [];
  jugador1:any;
  jugador2:any;


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

    imprime(uno:any, dos:any):void{
      this.jugador1 = document.getElementById(uno).textContent;
      this.jugador2 = document.getElementById(dos).textContent;
      console.log(this.jugador1, this.jugador2);
      localStorage.setItem("jugador1",this.jugador1);
      localStorage.setItem("jugador2",this.jugador2);
    }

    imprime2(uno:any, dos:any):void{
      let aux = document.getElementById(uno).lastElementChild;
      let aux2 = document.getElementById(dos).lastElementChild;


      this.jugador1 = aux.innerHTML;
      this.jugador2 = aux2.innerHTML;

      console.log(this.jugador1, this.jugador2);
      localStorage.setItem("jugador1",this.jugador1);
      localStorage.setItem("jugador2",this.jugador2);
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
        ev.target.appendChild(document.getElementById(data));
        //document.getElementById("demo").innerHTML = "The p element was dropped";
        //alert('Usted a seleccionado a un jugador. ');
      }
  }


