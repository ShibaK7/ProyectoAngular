import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingMasculinoComponent } from './ranking/ranking-masculino/ranking-masculino.component';

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
import { RankingFemeninoComponent } from './ranking/ranking-femenino/ranking-femenino.component';

import { TorneosComponent } from './torneos/torneos.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    RankingMasculinoComponent,
    RankingFemeninoComponent,
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

  ],
  imports: [
    BrowserModule,
    FormsModule,
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
