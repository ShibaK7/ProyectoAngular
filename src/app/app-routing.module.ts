import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingComponent } from './ranking/ranking.component';
import { Ranking2Component } from './ranking2/ranking2.component'
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/ranking', pathMatch: 'full' },
  { path: 'ranking', component: RankingComponent },
  { path: 'bio/:id', component: Ranking2Component },
  { path: 'principal', component: PrincipalComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}