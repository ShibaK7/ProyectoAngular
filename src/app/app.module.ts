import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { Ranking2Component } from './ranking2/ranking2.component';

import { AppRoutingModule } from './/app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryInformacionService }  from './basededatos';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { CompletosComponent } from './resultados/completos/completos.component';
import { RecientesComponent } from './resultados/recientes/recientes.component';

import { TorneosComponent } from './torneos/torneos.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { LcontactoComponent } from './lcontacto/lcontacto.component';


@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    Ranking2Component,
    PrincipalComponent,
    NavbarComponent,
    NoticiaComponent,
    ContactoComponent,
    ResultadosComponent,
    CompletosComponent,
    RecientesComponent,
    TorneosComponent,
    FooterComponent,
    InicioComponent,
    LcontactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryInformacionService, { dataEncapsulation: false }
    )
  ],
  providers: [RankingComponent],
  exports: [RankingComponent],
  bootstrap: [AppComponent, ResultadosComponent]
})
export class AppModule { }
