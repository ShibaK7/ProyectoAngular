import { Component } from '@angular/core';
import { Competencias } from '../../competencias'

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component {

  categorias = ['Categoria1','Categoria2','Categoria3','Categoria4','Categoria5'];

  model = new Competencias(1, "Individual masculino", 1, null, this.categorias[0], 1500, "$200", "$600", "$700");

  submitted=false;

  onSubmit(){ this.submitted = true; }

  get diagnostic(){ return JSON.stringify(this.model);}

 newCompetencia()
 {
   this.model = new Competencias(1, '', null, null, '', null, '', '', '')
 }

}
