import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public result: any;

  constructor(private homeService: HomeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.homeService.getData().subscribe(data => {
      this.result = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
      console.log(this.result);
    }, err => {
      console.log('Something went wrong!' + JSON.stringify(err));
    });

  }

}
