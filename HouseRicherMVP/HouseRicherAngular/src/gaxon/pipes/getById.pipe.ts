import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {

  transform(value: any[], id: string, property: string): any {
    const foundItem = value.find(item => {
      if ( item.id !== undefined )
      {
        return item.id === id;
      }

      return false;
    });

    if ( foundItem )
    {
      return foundItem[property];
    }
  }

}
