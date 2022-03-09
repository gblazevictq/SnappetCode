import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'stringToDateTime'
})
export class StringToDateTimePipe implements PipeTransform {
  transform(value: string): unknown {
    return DateTime.fromISO(value).toFormat('dd/MM/yyyy HH:mm');
  }
}
