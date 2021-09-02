import { Injectable } from '@angular/core';
import {Logger} from "../../logger.service";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private logger: Logger) {

  }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    return of(hero);
  }

  saveHero(newHero: Hero){
    let index = HEROES.findIndex(h => h.id === newHero.id)!;
    HEROES[index] = newHero;
    return of(HEROES)
  }
  addHero(newHero: Hero){
    HEROES.push(newHero);
    return of(HEROES)
  }

}
