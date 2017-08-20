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

  ngOnInit() {
    // this.result = this.resultsService.getData();
    // console.log(this.result);

    this.http.get('http://ergast.com/api/f1/2015/driverStandings.json').subscribe(data => {
      // Read the result field from the JSON response.
      this.result = data['MRData'];
      console.log(this.result);
    });
  }

}
