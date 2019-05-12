import { Component, OnInit} from '@angular/core';
import { Competencias } from '../../competencias'
import * as $ from 'jquery';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component implements OnInit{

  categorias = ['Categoria1','Categoria2','Categoria3','Categoria4','Categoria5'];

  model = new Competencias(1, "Individual masculino", 1, null, this.categorias[0], 1500, "$200", "$600", "$700",1, "Individual femenino", 1, null, this.categorias[0], 1500, "$200", "$600", "$700",1, "Dobles masculino", 1, null, this.categorias[0], 1500, "$200", "$600", "$700",1, "Dobles femenino", 1, null, this.categorias[0], 1500, "$200", "$600", "$700");

  submitted=false;

  onSubmit(){ this.submitted = true; }

  get diagnostic(){ return JSON.stringify(this.model);}

 newCompetencia()
 {
   this.model = new Competencias(1, '', null, null, '', null, '', '', '',1, '', null, null, '', null, '', '', '',1, '', null, null, '', null, '', '', '',1, '', null, null, '', null, '', '', '')
 }

  options = [
    {name:'Individuales masculino', value:'1', checked:true},
    {name:'Individuales femenino', value:'2', checked:false},
    {name: 'Dobles masculino', value:'3', checked:false},
    {name: 'Dobles femenino', value:'4', checked:false}
  ]

  get selectedOptions()
  {
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.value)
  }

  public ngOnInit()
  {
    $(function(){
      $('#im').change(function(){
        if($(this).prop('checked')){
          $('#oim').show();
        }else{
          $('#oim').hide();
        }

      })

      $('#if').change(function(){
        if($(this).prop('checked')){
          $('#oif').show();
        }else{
          $('#oif').hide();
        }

      })

      $('#dm').change(function(){
        if($(this).prop('checked')){
          $('#odm').show();
        }else{
          $('#odm').hide();
        }

      })

      $('#df').change(function(){
        if($(this).prop('checked')){
          $('#odf').show();
        }else{
          $('#odf').hide();
        }

      })
    })
  }

}
