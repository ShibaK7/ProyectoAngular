import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private router: Router) { }

  redireccionar(){
    try{
      let token = localStorage.getItem('token');
      token = atob(token.split('.')[1]);
      let token2 = JSON.parse(token);
      console.log(token2);
      if(token2.user_id == "LHdfuXfsMYRIvpYtWRkPmcaKq5f1"){
        this.router.navigate(['/contacto']);
      }
    }catch(e){
      this.router.navigateByUrl('/inicio');
      return false;
    }
  }


}
