import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number, id : number): number {
    const rate = id/2;
    return rate;
  }

}
