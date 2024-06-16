import { Component, OnInit } from '@angular/core';
import { Slide } from './slide';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  Slide = new Slide();
  style = {};

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.style = { transform: `translateX(-${this.Slide.SliderTop()}px)` };
    });
  }
}
