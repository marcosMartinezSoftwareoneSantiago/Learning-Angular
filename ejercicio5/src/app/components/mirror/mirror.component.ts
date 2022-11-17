import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.css']
})
export class MirrorComponent implements OnInit {

  text:string = "";

  showDiv:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  captureKey(){
    this.showDiv = !(this.text === "")
  }

}
