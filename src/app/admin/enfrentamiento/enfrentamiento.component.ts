import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Competencia } from '../../competencia';
import { CompetenciaService } from '../../competencia.service';
import { Inscrito } from '../../inscrito';
import { InscritoService } from '../../inscrito.service';

import { EncuentrosService } from '../../encuentros.service'
import { Encuentro } from 'src/app/Encuentro';

@Component({
  selector: 'app-enfrentamiento',
  templateUrl: './enfrentamiento.component.html',
  styleUrls: ['./enfrentamiento.component.css']
})
export class EnfrentamientoComponent implements OnInit {

  competencia: Competencia;
  listaCompetidores: Inscrito[] = [];
  listaEncuentros: Encuentro[] = [];
  
  fecha;
  hora;
  idCompetencia;
  jugadorUno;
  jugadorDos;

  constructor(private route: ActivatedRoute, private competenciaService: CompetenciaService, private encService: EncuentrosService ,  
    private inscritoService: InscritoService, private location: Location) { }

    ngOnInit() {
      this.getCompetencia();    
    }
  
    ngAfterViewInit() {
      this.getListaCompetidores();
    }
  
    getCompetencia(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.competenciaService.getCompetencia(id)
      .subscribe(competencia => {
        this.competencia = competencia;
      })
    }
  
    getListaCompetidores(): void {
      this.inscritoService.getInscritos()
      .subscribe(inscritos =>
        this.listaCompetidores = inscritos.filter(inscrito => this.competencia.id == inscrito.idCompetencia))
    }

    agregarEnfrentamiento(fechax:any, horax:any):void{
      console.log("Se ha clickeado");
      let content1 = document.getElementById('uno').lastElementChild;
      let content2 = document.getElementById('dos').lastElementChild;
      //alert("Valor td 1: "+content1.innerHTML+" Valor td 2: "+content2.innerHTML+ document.getElementById("tres").innerText);
      this.jugadorUno = content1.innerHTML;
      this.jugadorDos = content2.innerHTML;
      document.getElementById('uno').removeChild(content1);
      document.getElementById('dos').removeChild(content2);
      this.idCompetencia = +this.route.snapshot.paramMap.get('id');
      this.fecha = fechax;
      this.hora = horax;
      console.log(fechax+" "+horax);
      this.agregarEnf();
    }

    agregarEnf(){
      console.log("uno: "+this.jugadorUno+" dos: "+this.jugadorDos+" idCompetencia: "+this.idCompetencia
      +" fecha: "+this.fecha+" hora: "+this.hora);

      if(!this.jugadorUno || !this.jugadorDos || !this.idCompetencia || !this.fecha || !this.hora){
        return;
      }

      let encuentroAux = new Encuentro(this.idCompetencia, this.jugadorUno, this.jugadorDos, this.hora, this.fecha);

      /*his.encService.agregarEnfrentamiento(encuentroAux).subscribe(
        inscrito => this.jugadoresInscritos.push(inscrito)
      )*/


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
