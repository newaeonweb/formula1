import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResultsService {
  private url: string;

  constructor(private http: HttpClient) { }

  getData(year) {
    this.url = 'http://ergast.com/api/f1/' + year + '/results.json?limit=400&offset=0';

    return this.http.get(this.url);

  }

}
