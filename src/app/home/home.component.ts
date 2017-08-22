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
  public champions = [];
  isLoading = false;

  constructor(private homeService: HomeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.isLoading = true;

    let years = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];
    for (let i = 0; i < years.length; i++) {

      let year = years[i];

      this.homeService.getData(year).subscribe(data => {
        this.isLoading = false;
        this.champions.push(data['MRData']['StandingsTable']['StandingsLists'][0]);
        console.log(this.champions);
      }, err => {
        this.isLoading = false;
        console.log('Something went wrong!' + JSON.stringify(err));
      });

    }


  }

}
