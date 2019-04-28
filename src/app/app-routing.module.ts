import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { RankingComponent } from './ranking/ranking.component';
import { RankingMasculinoComponent } from './ranking/ranking-masculino/ranking-masculino.component'
import { RankingFemeninoComponent } from './ranking/ranking-femenino/ranking-femenino.component'

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'ranking', component: RankingComponent },
  { path: 'masculino/:id', component: RankingMasculinoComponent },
  { path: 'femenino/:id', component: RankingFemeninoComponent},
  { path: 'principal', component: PrincipalComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}