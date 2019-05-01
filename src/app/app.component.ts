import { Component, OnInit } from '@angular/core';
import { IGame, Game } from './models';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HotAirBalloon';
  game: IGame = null;
  numbers: number[];

  ngOnInit(): void {
    this.game = new Game();
    this.numbers = Array.from(Array(10).keys())
                        .reverse()
                        .map(i => Array.from(Array(10).keys())
                                       .map(x => 10 * i + x))
                        .reduce((pv, cv) => pv.concat(...cv), []);
  }

  isNumber(value: number) {
    return !Number.isNaN(value);
  }
}
