import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(array: string[], startWith: string): any {
    console.log(array);
    let temp: string[] = [];
    temp = array.filter(a => a.startsWith(startWith));
    return temp;
  }

}
