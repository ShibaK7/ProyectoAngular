import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilderl:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilderl.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

}
