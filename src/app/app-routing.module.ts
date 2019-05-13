import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingMasculinoComponent } from './ranking/ranking-masculino/ranking-masculino.component';
import { RankingFemeninoComponent } from './ranking/ranking-femenino/ranking-femenino.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TorneosComponent } from './torneos/torneos.component';
import { TorneoIndividualComponent } from './torneos/torneo-individual/torneo-individual.component';
import { LcontactoComponent } from './lcontacto/lcontacto.component';
import { AdminComponent } from './admin/admin.component'
import { AutenticacionService } from './servicios/autenticacion.service';
import { CapturistaComponent } from './capturista/capturista.component';
import { RegistroComponent } from './capturista/registro/registro.component';
import { InscripcionComponent } from './capturista/inscripcion/inscripcion.component';
import { EnfrentamientoComponent } from './admin/enfrentamiento/enfrentamiento.component';
import { LlaveComponent } from './admin/llave/llave.component';

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
  { path: 'admin', component: AdminComponent },
  { path: 'capturista', component: CapturistaComponent},
  { path: 'registro/:id', component: RegistroComponent },
  { path: 'inscripcion/:id', component: InscripcionComponent },
  { path: 'enfrentamiento/:id', component: EnfrentamientoComponent },
  { path: 'llave', component: LlaveComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}