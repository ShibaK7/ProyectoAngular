import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TorneoIndividualComponent } from './torneos/torneo-individual/torneo-individual.component';
import { LcontactoComponent } from './lcontacto/lcontacto.component';
import { AdminComponent } from './admin/admin.component';
import { CapturistaComponent } from './capturista/capturista.component';
import { UserbarComponent } from './userbar/userbar.component';
import { RegistroComponent } from './capturista/registro/registro.component';
import { InscripcionComponent } from './capturista/inscripcion/inscripcion.component';
import { InscripcionIndividualMasculinoComponent } from './capturista/inscripcion/inscripcion-individual-masculino/inscripcion-individual-masculino.component';
import { InscripcionIndividualFemeninoComponent } from './capturista/inscripcion/inscripcion-individual-femenino/inscripcion-individual-femenino.component';
import { InscripcionDobleMasculinoComponent } from './capturista/inscripcion/inscripcion-doble-masculino/inscripcion-doble-masculino.component';
import { InscripcionDobleFemeninoComponent } from './capturista/inscripcion/inscripcion-doble-femenino/inscripcion-doble-femenino.component';
import { InscripcionDobleMixtoComponent } from './capturista/inscripcion/inscripcion-doble-mixto/inscripcion-doble-mixto.component';
import { EnfrentamientoComponent } from './admin/enfrentamiento/enfrentamiento.component';
<<<<<<< HEAD
import { RegistroTorneoComponent } from './registro-torneo/registro-torneo.component';
import { Paso1Component } from './registro-torneo/paso1/paso1.component';
import { Paso2Component } from './registro-torneo/paso2/paso2.component';
import { Paso3Component } from './registro-torneo/paso3/paso3.component';

=======
import { LlaveComponent } from './admin/llave/llave.component';
>>>>>>> llavefinal


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
    TorneoIndividualComponent,
    AdminComponent,
    LcontactoComponent,
    CapturistaComponent,
    UserbarComponent,
    RegistroComponent,
    InscripcionComponent,
    InscripcionIndividualMasculinoComponent,
    InscripcionIndividualFemeninoComponent,
    InscripcionDobleMasculinoComponent,
    InscripcionDobleFemeninoComponent,
    InscripcionDobleMixtoComponent,
    EnfrentamientoComponent,
<<<<<<< HEAD
    RegistroTorneoComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component
=======
    LlaveComponent
>>>>>>> llavefinal
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
