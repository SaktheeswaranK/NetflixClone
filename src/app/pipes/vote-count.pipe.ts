import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voteCount'
})
export class VoteCountPipe implements PipeTransform {

  transform(value: string, vote : number): string {
    const temp = 'voters count : ';
    value = temp + vote;
    return value;
  }

}
