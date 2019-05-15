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
  }


