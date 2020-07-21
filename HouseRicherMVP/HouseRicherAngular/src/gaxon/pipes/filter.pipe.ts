import { Pipe, PipeTransform } from '@angular/core';
import {GxHelper} from './../helpers';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(itemsArray: any[], searchStr: string): any {
    return GxHelper.filterArrayByString(itemsArray, searchStr);
  }

}
