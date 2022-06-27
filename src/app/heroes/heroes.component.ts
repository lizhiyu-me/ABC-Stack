import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService:HeroService,public messageService: MessageService) { }
  hero:Hero = {
    id:1,
    name:"士大夫山豆根ThunderGod"
  };
  heroes:Hero[] = [];
  ngOnInit(): void {
    // this.heroes = this.getHeroes();
    this.getHeroes();
  }

  getHeroes(){
    this.heroesService.getHeroes().subscribe((heroes)=>this.heroes = heroes);
  }

  selectedHero?:Hero;
  onSelect(hero:Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id:${hero.id}`)
  }

}
