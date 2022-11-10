import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-pages',
  templateUrl: './legal-pages.component.html',
  styleUrls: ['./legal-pages.component.css']
})
export class LegalPagesComponent implements OnInit {

  copyRight:string = "©2022 Marcos Martínez Domínguez";

  constructor() { }

  ngOnInit(): void {
  }

}
