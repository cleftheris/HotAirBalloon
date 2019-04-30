import { Pipe, PipeTransform } from '@angular/core';
import { IGame } from './models';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(isNaN(value) ? 0 : value);
  }
}
@Pipe({name: 'grid'})
export class GridPipe implements PipeTransform {
  transform(game: IGame, axis: string): any {
    if (axis === 'y') {
        return {
            'grid-row-start': 10 - Math.floor(game.start / 10),
            'grid-row-end': 10 - Math.floor(game.target / 10),
            'grid-column-start': Math.floor(game.start % 10) + 1,
            'grid-column-end': 'span 1'
        };
    } else {
        return {
            'grid-row-start': 10 - Math.floor(game.target / 10),
            'grid-row-end': 'span 1',
            'grid-column-start': Math.floor(game.start % 10) + 2,
            'grid-column-end': Math.floor(game.target % 10) + 1
        };
    }
  }
}
