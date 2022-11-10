import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headline:string = "casachollo";
  option1:string = 'Comprar';
  option2:string = 'Alquilar';
  personalInterest1:string = 'Mis alertas';
  personalInterest2:string = 'Favoritos';
  textButton1:string = "Publica";
  textButton2:string = "      Accede";
    
  
  constructor() { }

  ngOnInit(): void {
  }

}
