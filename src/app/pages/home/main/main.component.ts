import { Component, OnInit } from '@angular/core';
import { Dec } from './number';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  dec = new Dec();
  parcerias: string;
  suporte: string;
  time: number = 0;

  constructor() {}

  ngOnInit(): void {
    var x = this.dec.value();
    console.log(x);
  }
}
