import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'movieFilter',
    pure: false
})

export class MovieFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  	if( args == '' && value.length != 0 ) return value;
    if (value.length === 0){
      return value;
    }
    let resultArray = [];
    for (let item of value){
      //if (item.match('^.*' + args[0] + '.*$'))
      
      if( item[1].name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) != -1 ){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
