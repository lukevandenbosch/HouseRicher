import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToPlainText'
})
export class HtmlToPlainTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? String(value).replace(/<[^>]+>/gm, '') : '';
  }

}
