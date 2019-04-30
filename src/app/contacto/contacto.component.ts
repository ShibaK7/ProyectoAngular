import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  todoForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.email],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

}
