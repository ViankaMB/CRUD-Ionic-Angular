import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverPortfolioPageRoutingModule } from './driver-portfolio-routing.module';

import { DriverPortfolioPage } from './driver-portfolio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverPortfolioPageRoutingModule
  ],
  declarations: [DriverPortfolioPage]
})
export class DriverPortfolioPageModule {}
