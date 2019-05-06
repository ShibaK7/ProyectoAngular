import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingMasculinoComponent } from './ranking/ranking-masculino/ranking-masculino.component';
import { RankingFemeninoComponent } from './ranking/ranking-femenino/ranking-femenino.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { LcontactoComponent } from './lcontacto/lcontacto.component';
import { AdminComponent } from './admin/admin.component'
import { AutenticacionService } from './servicios/autenticacion.service';
import { CapturistaComponent } from './capturista/capturista.component';
import { TorneosComponent } from './torneos/torneos.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'ranking', component: RankingComponent },
  { path: 'masculino/:id', component: RankingMasculinoComponent },
  { path: 'femenino/:id', component: RankingFemeninoComponent},
  { path: 'masculino/:id', component: RankingMasculinoComponent },
  { path: 'femenino/:id', component: RankingFemeninoComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'resultados', component: ResultadosComponent },
  { path: 'contacto', component: LcontactoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'capturista', component: CapturistaComponent},
  { path: 'torneos', component: TorneosComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}