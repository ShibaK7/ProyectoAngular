import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { JUGADORES } from './lista-jugadores';
import { JUGADORAS } from './lista-jugadoras';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RankingComponent, JUGADORES, JUGADORAS],
  exports: [RankingComponent],
  bootstrap: [AppComponent,
    RankingComponent]
})
export class AppModule { }
