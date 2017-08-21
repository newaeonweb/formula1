import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ResultsComponent } from './results/results.component';
import { WinnersComponent } from './winners/winners.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { ResultsService } from './results/results.service';
import { WinnersService } from './winners/winners.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    WinnersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ResultsService, WinnersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
