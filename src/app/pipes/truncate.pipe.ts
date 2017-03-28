/**
 * Created by anas on 28/03/17.
 */
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxChars: number = 20, endChars: string = '...'): string {
    let result = value;

    if(value && value.length > maxChars){
      result = value.substr(0, maxChars) + endChars;
    }

    return result;
  }
}
