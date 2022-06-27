import { Hero } from './../hero';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }
  @Input() hero?:Hero;
  ngOnInit(): void {
  }

}
