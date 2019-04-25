import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { RankingComponent } from './ranking/ranking.component';
import { Ranking2Component } from './ranking2/ranking2.component';

import { AppRoutingModule } from './/app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryInformacionService }  from './basededatos';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    Ranking2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryInformacionService, { dataEncapsulation: false })
  ],
  providers: [RankingComponent],
  exports: [RankingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
