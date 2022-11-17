import { Component } from '@angular/core';

const show:string = "Mostrar tabla";
const hide:string = "Ocultar tabla";

class Worker {

  nombreCompleto:string;
  antiguedad:number;
  sueldo:number;

  constructor(fullName:string, yearCareer:number, salary:number ){
    this.nombreCompleto = fullName;
    this.antiguedad = yearCareer;
    this.sueldo = salary;
  }
}

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.css']
})
export class ListaComponentComponent {
  textButton:string = show;
  visibleTable:boolean = false;
  luis:Worker = new Worker("Luis Pérez López", 6, 24000);
  maria:Worker = new Worker("María Gómez Hernández", 6, 32000);
  
  showOrHideTable(){
    this.visibleTable = !this.visibleTable;
    if(this.textButton === show){
      this.textButton = hide;
    }else if(this.textButton === hide){
      this.textButton = show;
    }else{
      console.log("Error at showOrHideTable()");
    }
  }

}
