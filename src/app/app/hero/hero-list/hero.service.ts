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

}
