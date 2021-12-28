import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipeCamelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const values = value.split(' ');

    const result = values.map((word) => {
      return this.capitalize(word) + ' ';
    });

    return result;
  }

  capitalize(value: string) {
    return (
      value.substring(0, 1).toUpperCase() +
      value.substring(1).toLocaleLowerCase()
    );
  }
}
