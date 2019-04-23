import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RankingComponent } from './ranking/ranking.component';
import { Ranking2Component } from './ranking2/ranking2.component'

const routes: Routes = [
  { path: '', redirectTo: '/ranking', pathMatch: 'full' },
  { path: 'ranking', component: RankingComponent },
  { path: 'bio/:id', component: Ranking2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}