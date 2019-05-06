import { Injectable } from '@angular/core';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import { from } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service'


@Injectable({
  providedIn: 'root'
})
export class AuthUsuarioService {
  db;
  constructor() {
    firebase.initializeApp({
      apiKey:"AIzaSyCriExGbhQ2zU-xk37kG1dLZovVgMXLZ_E",
      authDomain: "angulartenis.firebaseapp.com",
      projectId: "angulartenis"
    });
    this.db = firebase.firestore();
   }

   agregarUsuario(email: string, password: string){
     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
       //Manejo de errores.
     })
   }

   iniciarSesion(email:string, password: string){
     
     firebase.auth().signOut().then(function(){
       console.log("Se cerro la sesion");
     }).catch(function(error){
       //Error
     });

     firebase.auth().signInWithEmailAndPassword(email, password).then(
       response => {
         firebase.auth().currentUser.getIdToken().then(function(jsonwebtoken){
           console.log(jsonwebtoken);
           localStorage.setItem('token', jsonwebtoken);
           localStorage.setItem('correo', firebase.auth().currentUser.email);
           sessionStorage.setItem('token', jsonwebtoken);
           let router: Router;

           let token = localStorage.getItem('token');
           token = atob(token.split('.')[1]);
           let token2 = JSON.parse(token);
           console.log(token2);
           if(token2.user_id != 'LHdfuXfsMYRIvpYtWRkPmcaKq5f1')
           {
            if(token2.user_id == 'JpKcaQ1rN9QVqqbVkwOTdwTcRsx1'){
              console.log('Entro Rebeca a la pagina');
              let nombre:string = "Rebeca";
              localStorage.setItem('resp', nombre);
            }else{
              console.log('No entro a la pagina');
            }
            
           } else{
             console.log('Entro Esteban a la pagina');
             let nombre:string = "Esteban";
             localStorage.setItem('resp', nombre);
           }
           return email;
         })
       }
     ).catch( error => console.log(error));

   }
}
