import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.css']
})
export class UserbarComponent implements OnInit {

  @Input() usuario: string;

  constructor() { 
    this.usuario = "Desconocido";
  }

  ngOnInit() {
  }

}
