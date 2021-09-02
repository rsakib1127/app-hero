import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {HeroDetailComponent} from "../hero-detail/hero-detail.component";


import {HeroService} from "./hero.service";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {BuilderHarnessExecutionOptions} from "@angular-devkit/build-angular/src/testing";


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroDetailComponent]
})

export class HeroListComponent implements OnInit {


  heroes: Hero[] = [];
  newHero?:Hero;
  newHeroForm = this.formBuilder.group({
    name: '',
    id: ''
  });

  constructor(private heroService: HeroService,private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getHeroes();
    // this.heroService.getHeroes()
    //   .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }



  myObserver = {
    next: (heroes: Hero[]) =>{
      this.heroes=HEROES;
      console.log('Observer got a list of heroes ');
    },

    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log("Observer has completed")
  };

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(this.myObserver);
  }

  onSubmit(): void{
    this.heroService.addHero(this.newHeroForm.value)
  }



}
