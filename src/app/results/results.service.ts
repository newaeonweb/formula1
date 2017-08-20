import { Injectable } from '@angular/core';

@Injectable()
export class ResultsService {

  constructor() { }

  getData(){
    return [1,2,3,4]
  }

}
