import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router}   from '@angular/router';

import { ResultsService } from "./results.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public result: any;
  // public route: any;
  public year: any;
  public sub: any;

  years = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];
  selectedYear = '2015';
  isLoading = false;

  constructor(private resultsService: ResultsService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  updateYear(year): void {
    console.log(year);
    this.isLoading = true;
    // Trick to update URL
    this.router.navigate(["/results/" + year]);
    // Get another list based on year
    this.resultsService.getData(year).subscribe(data => {
      this.isLoading = false;
      this.result = data['MRData']['RaceTable']['Races'];
      console.log(this.result);
    }, err => {
      this.isLoading = false;
      console.log('Something went wrong!' + JSON.stringify(err));
    });
  }

  ngOnInit(): void {
    this.isLoading = true;

    console.log(this.route.params);

    this.year = this.route.snapshot.paramMap.get('year');

    // this.sub = this.route.params.subscribe(params => {
    //   this.year = +params['year'];
    //   console.log(this.year);
    // });

    if(this.year) {
      this.selectedYear = this.year;
    }


    this.resultsService.getData(this.selectedYear).subscribe(data => {
      this.isLoading = false;
       this.result = data['MRData']['RaceTable']['Races'];
        console.log(this.result);
    }, err => {
      this.isLoading = false;
      console.log('Something went wrong!' + JSON.stringify(err));
    });

  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }


}
