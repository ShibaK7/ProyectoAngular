import { Component, OnInit } from '@angular/core';

declare const myTest: any;
declare var $: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css']
})
export class TorneosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    myTest();
  }
}
