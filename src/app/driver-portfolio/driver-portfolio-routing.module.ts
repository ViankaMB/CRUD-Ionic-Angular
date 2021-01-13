import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverPortfolioPage } from './driver-portfolio.page';

const routes: Routes = [
  {
    path: '',
    component: DriverPortfolioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverPortfolioPageRoutingModule {}
