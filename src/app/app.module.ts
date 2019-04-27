import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
//import { JUGADORES } from './lista-jugadores';
import { JUGADORAS } from './lista-jugadoras';
import { AppRoutingModule } from './/app-routing.module';
import { Ranking2Component } from './ranking2/ranking2.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryJugadorService }  from './lista-jugadores';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    Ranking2Component,
    PrincipalComponent,
    NavbarComponent,
    NoticiaComponent,
    ContactoComponent,
    PieComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryJugadorService, { dataEncapsulation: false }
    )
  ],
  providers: [RankingComponent, JUGADORAS],
  exports: [RankingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
