import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadoscontatoService {
private dados:any=[]
  constructor() { }


  salvardados(index:string,data:any):boolean{
if(index){

  this.dados[index]=data
  return true

}
return false


  }

getData(index:string): any{
  return this.dados[index]
}

}
