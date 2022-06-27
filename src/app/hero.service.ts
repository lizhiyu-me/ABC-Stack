import { MessageService } from './messages.service';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService:MessageService) { }

  getHeroes():Observable<Hero[]>{
     let heroes = of(HEROES);
     this.messagesService.add("拿捏到了英雄门");
     return heroes;
  }
}
