import { Component, OnInit } from '@angular/core';
import {HeroService} from "./hero.service";

import {Hero} from "./hero";
import  {HEROES} from "./mock-heroes";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  // providers: [Hero]
})

export class HeroListComponent implements OnInit {


  heroes: Hero[] = [];
  // constructor() {
  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    // this.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }

}
