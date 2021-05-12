import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoModelos'
})
export class FormatoModelosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let fixedValue : string;
    let cant :number = value.length


    fixedValue = `[${value[0]}-${value[cant -1]}]`

    return fixedValue;
  }

}
