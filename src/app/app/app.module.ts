import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import {Logger} from "./logger.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { EditHeroComponent } from './hero/edit-hero/edit-hero/edit-hero.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
// import {BackendService} from "./"
@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    EditHeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
