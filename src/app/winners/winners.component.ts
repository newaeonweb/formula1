import { Component, OnInit } from '@angular/core';
import { WinnersService } from './winners.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  public winners: any;

  constructor(private winnersService: WinnersService) { }

  ngOnInit() {
    this.winners = this.winnersService.getData();
    console.log(this.winners);
  }

}
