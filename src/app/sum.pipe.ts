import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value+5;
  }

}
