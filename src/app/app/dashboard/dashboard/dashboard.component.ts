import { Component, OnInit } from '@angular/core';

import {Hero} from '../../hero/hero-list/hero';
import {HeroService} from "../../hero/hero-list/hero.service";
import {error} from "@angular/compiler/src/util";
import {HeroDetailComponent} from "../../hero/hero-detail/hero-detail.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes : Hero[] = []
  constructor(private heroService:HeroService) {

  }




  observer = {
    next: ((heroes:Hero[])=> {
        this.heroes = heroes.slice(1,5);
        console.log("hero data has been loaded")
      }
    ),
    error: ((err: Error) => console.error(err))
  }
  getHeros(): void{
    this.heroService.getHeroes().subscribe(this.observer)
  }
  ngOnInit(): void {
    this.getHeros()
  }

}
