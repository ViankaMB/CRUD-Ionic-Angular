import { Component, OnInit } from '@angular/core';

import { Driver } from 'src/app/models/driver.models';

@Component({
  selector: 'app-driver-portfolio',
  templateUrl: './driver-portfolio.page.html',
  styleUrls: ['./driver-portfolio.page.scss'],
})
export class DriverPortfolioPage implements OnInit {

  drivers: Driver[] = [
    {
      firstName: 'Roberto',
      lastName: 'Nuñez',
      enterprise: 'Transporte Espinal'
    },
    {
      firstName: 'Luis',
      lastName: 'Sanchez',
      enterprise: 'Transporte Lupita'
    },
    {
      firstName: 'Armando',
      lastName: 'Valenzuela',
      enterprise: 'Transporte Balbi'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
