import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingMasculinoComponent } from './ranking/ranking-masculino/ranking-masculino.component';
import { RankingFemeninoComponent } from './ranking/ranking-femenino/ranking-femenino.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { LcontactoComponent } from './lcontacto/lcontacto.component';
import { Paso1Component } from './registro-torneo/paso1/paso1.component';
import { Paso2Component } from './registro-torneo/paso2/paso2.component';
import { Paso3Component } from './registro-torneo/paso3/paso3.component';

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
  { path: 'paso1' , component: Paso1Component },
  { path: 'paso2' , component: Paso2Component },
  { path: 'paso3' , component: Paso3Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}