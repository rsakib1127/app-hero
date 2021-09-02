import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import {Logger} from "./logger.service";
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { EditHeroComponent } from './hero/edit-hero/edit-hero/edit-hero.component';
// import {BackendService} from "./"
@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    EditHeroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
