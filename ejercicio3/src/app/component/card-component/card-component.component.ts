import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  counter:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  count(){
    this.counter++;
  }

}
