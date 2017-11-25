import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'key_iterable'})
export class KeyIterablePipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value);
    }
}