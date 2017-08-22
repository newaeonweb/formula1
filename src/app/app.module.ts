import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ResultsComponent } from './results/results.component';
import { WinnersComponent } from './winners/winners.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { HomeService } from './home/home.service';
import { ResultsService } from './results/results.service';
import { WinnersService } from './winners/winners.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    WinnersComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [HomeService, ResultsService, WinnersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
