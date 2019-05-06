import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  token;
  usuario;
  constructor() {
    this.token = localStorage.getItem('token');
    this.usuario = localStorage.getItem('correo');
  }

  ngOnInit() {
  }

}
