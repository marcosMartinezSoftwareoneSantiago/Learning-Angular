import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  opcionBusqueda1:string = "Comprar";
  opcionBusqueda2:string = "Alquilar";
  opcionBusqueda3:string = "Obra nueva";
  opcionBusqueda4:string = "Alquilar";

  constructor() { }

  ngOnInit(): void {
  }

}
