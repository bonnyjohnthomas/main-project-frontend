import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(alllocations:any[],searchTerm:string,propertyName:string): any[] {

    const result:any[]=[]
 
    if(!alllocations||searchTerm==''||propertyName==''){
      return alllocations;
    }

    alllocations.forEach((item:any)=>{
      if(item[propertyName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
         result.push(item)
      }
    })

    return result;
  }

}
