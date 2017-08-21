import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  private url: string;

  constructor(private http: HttpClient) { }

  getData() {
    this.url = 'http://ergast.com/api/f1/2015/driverStandings.json';

    return this.http.get(this.url);

  }

}
