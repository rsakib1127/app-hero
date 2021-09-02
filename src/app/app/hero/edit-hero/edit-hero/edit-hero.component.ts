import { Component, OnInit, Input } from '@angular/core';
import {Hero} from "../../hero-list/hero";

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  @Input() hero?: Hero
  constructor() {
  }

  ngOnInit(): void {
  }


  onClick(hero: Hero) {

  }
}
