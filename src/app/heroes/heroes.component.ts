import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero:Hero = {
    id:1,
    name:"士大夫山豆根ThunderGod"
  };
  heroes:Hero[] = HEROES;
  ngOnInit(): void {
  }

  selectedHero?:Hero;
  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

}
