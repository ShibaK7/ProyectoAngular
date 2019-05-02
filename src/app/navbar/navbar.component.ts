import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthUsuarioService } from '../servicios/auth-usuario.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  correo:string;
  pass:string;
  loginForm:FormGroup;
  constructor(private router:Router, private formBuilderl:FormBuilder, private crud: AuthUsuarioService) { }

  ngOnInit() {
    this.loginForm = this.formBuilderl.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  public registrarse(){
    console.log(this.correo);
    console.log(this.pass);
    //this.crud.agregarUsuario(this.correo, this.pass);
  }

  public iniciarSesion(){
 
    this.crud.iniciarSesion(this.correo,this.pass);
    this.validar();
  }

  public validar(){
    let user = localStorage.getItem('resp');
    console.log(user);
    if(user == "Esteban"){
      console.log("Usuario: Esteban");
         //this.router.navigate(['/admin']);
    }
    else{
      if(user == "Rebeca"){
        console.log("Usuario: Rebeca");
        //this.router.navigate(['/contacto']);
      }
      else{
        console.log("Usuario: Sin Acceso");
        //this.router.navigate(['/principal']);
      }
    }
  }

}
