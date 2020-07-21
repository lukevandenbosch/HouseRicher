import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'oneLetter'
})
export class OneLetterPipe implements PipeTransform {

  transform(input: any): any {
    if (input) {
      return input.substring(0, 1).toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
      });
    }

    return input;
  }

}
