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

  constructor(private resultsService: ResultsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.resultsService.getData().subscribe(data => {
       this.result = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
        console.log(this.result);
    }, err => {
      console.log('Something went wrong!' + JSON.stringify(err));
    });

  }

}
