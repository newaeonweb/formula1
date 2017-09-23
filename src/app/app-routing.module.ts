import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { WinnersComponent } from './winners/winners.component';
import { PageNotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results/:year', component: ResultsComponent },
  { path: 'winners/:year', component: WinnersComponent },
  //{ path: '',   redirectTo: '/results', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
