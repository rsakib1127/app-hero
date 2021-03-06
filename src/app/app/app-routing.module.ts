import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HeroListComponent} from "./hero/hero-list/hero-list.component";
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero/hero-detail/hero-detail.component";

const routes: Routes = [
  {
    path:'heroes',
    component: HeroListComponent
  },

  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
