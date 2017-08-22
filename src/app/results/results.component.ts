import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultsService } from "./results.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public result: any;

  years = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];
  selectedYear = '2015';
  isLoading = false;

  constructor(private resultsService: ResultsService, private http: HttpClient) { }

  updateYear(year): void {
    console.log(year);
    this.isLoading = true;
    this.resultsService.getData(year).subscribe(data => {
      this.isLoading = false;
      this.result = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
      console.log(this.result);
    }, err => {
      this.isLoading = false;
      console.log('Something went wrong!' + JSON.stringify(err));
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    let defaultYear = this.selectedYear;

    this.resultsService.getData(defaultYear).subscribe(data => {
      this.isLoading = false;
       this.result = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
        console.log(this.result);
    }, err => {
      this.isLoading = false;
      console.log('Something went wrong!' + JSON.stringify(err));
    });

  }

}
