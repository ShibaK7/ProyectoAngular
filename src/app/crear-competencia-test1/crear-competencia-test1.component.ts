import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { TorneosRecordService } from '../torneos/torneos-record.service';
import { Torneo } from '../torneos/Torneos-Record';

import { FechaCompetenciaService } from '../fecha-competencia.service';



@Component({
  selector: 'app-crear-competencia-test1',
  templateUrl: './crear-competencia-test1.component.html',
  styleUrls: ['./crear-competencia-test1.component.css']
})
export class CrearCompetenciaTest1Component implements OnInit {

  torneos : Torneo[] ;
  torn: Observable<Torneo[]>;
  EditRowID: any = ' ';
  //competencias: Competencia[];

  private genero: string = "";
  private torneoSeleccionado: string = null;
  private registrosPorPagina: number = 24;
  private numeroPaginaF: number = 1;
  private totalPaginasF: number;
  private numeroPaginasFiltradasF: number = 1;
  private totalPaginasFiltradasF: number;
  private filtradoPais: boolean = false;

  private setNombre: string = " ";

  private searchTerms = new Subject<string>();






  constructor(private torneosRecordService: TorneosRecordService, private fechaCompetenciaService :FechaCompetenciaService , private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getTorneos();
    this.torneoSeleccionado = null;
    this.getPaginas();
    this.genero = "femenino";
    this.torneoSeleccionado = null;

    this.torn = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => 
      this.fechaCompetenciaService.searchTerms(term))
    );

    this.torn = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => 
      this.fechaCompetenciaService.searchTerms(term))
    );
  }



  getTorneos(): void {
    if(!this.filtradoPais)
    {
      let indice = (this.numeroPaginaF -1)*this.registrosPorPagina;
      this.torneosRecordService.getTorneos()
        .subscribe(torneos => 
          this.torneos = torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).slice(indice, indice+this.registrosPorPagina))
    }
    else
    {
      let indice = (this.numeroPaginasFiltradasF -1)*this.registrosPorPagina;
      this.torneosRecordService.getTorneos()
        .subscribe(torneos => 
          this.torneos = torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).slice(indice, indice+this.registrosPorPagina))
    }
  }

  getPaginas(): void {
    this.torneosRecordService.getTorneos().subscribe( torneos =>
      {
        if(((torneos.length/this.registrosPorPagina)-(Math.trunc(torneos.length / this.registrosPorPagina)))==0)
          this.totalPaginasF = Math.trunc(torneos.length / this.registrosPorPagina)
        else
          this.totalPaginasF = Math.trunc(torneos.length / this.registrosPorPagina)+1
      }
    )
  }

  getPaginasFiltradasFemenino(): void {
    this.torneosRecordService.getTorneos().subscribe( torneos =>
      {
        if(((torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).length/this.registrosPorPagina)-(Math.trunc(torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).length / this.registrosPorPagina)))==0)
          this.totalPaginasFiltradasF = Math.trunc(torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).length / this.registrosPorPagina)
        else
          this.totalPaginasFiltradasF = Math.trunc(torneos.filter(torneo => this.torneoSeleccionado == null || this.torneoSeleccionado == torneo.nacionalidad).length / this.registrosPorPagina)+1
      }
    )
  }

  cambiarPaisSeleccionado(newTorneoSeleccionado?: string) {
    if(newTorneoSeleccionado=="")
    {
      this.torneoSeleccionado=null;
      this.filtradoPais=false;
      this.numeroPaginasFiltradasF=1;
      this.getTorneos();
    }
    else
    {
      this.torneoSeleccionado = newTorneoSeleccionado;
      this.filtradoPais=true;
      this.numeroPaginaF=1;
      this.getPaginasFiltradasFemenino();
      this.getTorneos();
    }
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }



  
  avanzarPagina(genero: number) {
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        if(this.numeroPaginaF < this.totalPaginasF)
        this.numeroPaginaF++;
        this.getTorneos();
      }
      else
      {
        if(this.numeroPaginasFiltradasF < this.totalPaginasFiltradasF)
        this.numeroPaginasFiltradasF++;
        this.getTorneos();
      }
    }
  }

  regresarPagina(genero: number) {
    console.log('regresarPagina funciona');
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        if(this.numeroPaginaF > 1)
        this.numeroPaginaF--;
        this.getTorneos();
      }
      else
      {
        if(this.numeroPaginasFiltradasF > 1)
        this.numeroPaginasFiltradasF--;
        this.getTorneos();
      }
    }
  }

  avanzarFinal(genero: number) {
    console.log('avanzarFinal funciona');
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        this.numeroPaginaF = this.totalPaginasF;
        this.getTorneos();
      }
      else
      {
        this.numeroPaginasFiltradasF = this.totalPaginasFiltradasF;
        this.getTorneos();
      }
    }
  }

  regresarPrincipio(genero: number) {
    console.log('regresarPrincipio funciona');
    if(genero===1)
    {
      if(!this.filtradoPais)
      {
        this.numeroPaginaF = 1;
        this.getTorneos();
      }
      else
      {
        this.numeroPaginasFiltradasF = 1;
        this.getTorneos();
      }
    }
  }

  resetGenero(generoSeleccionado: number) {
    if(generoSeleccionado===1)
    {
      this.genero='femenino'; 
      this.torneoSeleccionado=null; 
      this.numeroPaginaF=1;
      this.filtradoPais=false;
      this.getTorneos();
      /*var selector = document.getElementById("select") as HTMLElement;
      selector.selectedIndex = 0;*/
    }
  }





  cambiarTorneoSeleccionado(newTorneoSeleccionado?: string) {
    if(newTorneoSeleccionado=="")
    {
      this.torneoSeleccionado = null;
      this.filtradoPais = false;
      this.numeroPaginasFiltradasF = 1;
      this.getTorneos();
    }
    else
    {
      this.torneoSeleccionado = newTorneoSeleccionado;
      this.filtradoPais = true;
      this.numeroPaginaF = 1;
      this.getPaginasFiltradasFemenino();
      this.getTorneos();
    }
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
        alert('Usted a seleccionado a un jugador. ');
      }


  Edit(val) {
    this.EditRowID = val;
}
      
calcular(fechaAux : string) {
  console.log(fechaAux);
  this.searchTerms.next(fechaAux);
}

myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



asd(a)
{
    if(a==1)
    document.getElementById("asd").style.display="none";
    else
    document.getElementById("asd").style.display="block";
}





}
