import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingMasculinoComponent } from './ranking/ranking-masculino/ranking-masculino.component';
import { RankingFemeninoComponent } from './ranking/ranking-femenino/ranking-femenino.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TorneosComponent } from './torneos/torneos.component';
import { TorneoIndividualComponent } from './torneos/torneo-individual/torneo-individual.component';
import { LcontactoComponent } from './lcontacto/lcontacto.component';
import { Paso1Component } from './registro-torneo/paso1/paso1.component';
import { Paso2Component } from './registro-torneo/paso2/paso2.component';
import { Paso3Component } from './registro-torneo/paso3/paso3.component';
import { AdminComponent } from './admin/admin.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { CapturistaComponent } from './capturista/capturista.component';
import { AdministracionComponent } from './otros/administracion/administracion.component';
import { CompetenciasComponent } from './otros/competencias/competencias.component';
import { RegistroComponent } from './capturista/registro/registro.component';
import { InscripcionComponent } from './capturista/inscripcion/inscripcion.component';
import { EnfrentamientoComponent } from './admin/enfrentamiento/enfrentamiento.component';
import { LlaveComponent } from './admin/llave/llave.component';
import { CrearCompetenciaTest1Component } from './crear-competencia-test1/crear-competencia-test1.component';
import { RegistroTorneoComponent } from './registro-torneo/registro-torneo.component';
import { PruebaComponent } from './prueba/prueba.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'ranking', component: RankingComponent },
  { path: 'masculino/:id', component: RankingMasculinoComponent },
  { path: 'femenino/:id', component: RankingFemeninoComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'resultados', component: ResultadosComponent },
  { path: 'torneos', component: TorneosComponent },
  { path: 'torneo-individual/:id', component: TorneoIndividualComponent},
  { path: 'contacto', component: LcontactoComponent },
  { path: 'paso1' , component: Paso1Component },
  { path: 'paso2' , component: Paso2Component },
  { path: 'paso3' , component: Paso3Component },
  { path: 'admin', component: AdminComponent },
  { path: 'capturista', component: CapturistaComponent},
  { path: 'admonAux', component: AdministracionComponent},
  { path: 'competencias/:id', component: CompetenciasComponent },
  { path: 'registro/:id', component: RegistroComponent },
  { path: 'inscripcion/:id', component: InscripcionComponent },
  { path: 'enfrentamiento/:id', component: EnfrentamientoComponent },
  { path: 'llave', component: LlaveComponent},
  { path: 'crear-competencia-test1/:id', component: CrearCompetenciaTest1Component },
  { path: 'registro-torneo', component: RegistroTorneoComponent },
  { path: 'prueba', component: PruebaComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}