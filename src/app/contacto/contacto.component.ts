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
      correo: ['', [Validators.email, Validators.required]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  guardarCorreo() {
    let contacto = {
      nombre: this.todoForm.controls['nombre'].value,
      apellido: this.todoForm.controls['apellido'].value,
      correo: this.todoForm.controls['correo'].value,
      asunto: this.todoForm.controls['asunto'].value,
      mensaje: this.todoForm.controls['mensaje'].value,
    }

    localStorage.setItem("contacto", JSON.stringify(contacto));

    this.todoForm.reset();
  }
}
