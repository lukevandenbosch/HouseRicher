import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'shortTitle'
})
export class ShortTitlePipe implements PipeTransform {

    transform(value: string): any {
        const stringArray = value.split(' ');
        const firstChar = stringArray[0].charAt(0).toUpperCase();
        let lastChar = '';

        if (stringArray.length > 1) {
            lastChar = stringArray.slice(-1).pop().charAt(0).toUpperCase();
        }
        return firstChar + lastChar;
    }
}
