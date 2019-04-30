import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LcontactoComponent } from './lcontacto/lcontacto.component';
import { RankingComponent } from './ranking/ranking.component';
import { Ranking2Component } from './ranking2/ranking2.component'
import { initChangeDetectorIfExisting } from '@angular/core/src/render3/instructions';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'ranking', component: RankingComponent },
  { path: 'bio/:id', component: Ranking2Component },
  { path: 'contacto', component: LcontactoComponent },
  { path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}