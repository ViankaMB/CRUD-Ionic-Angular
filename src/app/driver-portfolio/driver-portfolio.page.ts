import { Component, OnInit } from '@angular/core';

import { Driver } from 'src/app/models/driver.models';

import { AlertController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-driver-portfolio',
  templateUrl: './driver-portfolio.page.html',
  styleUrls: ['./driver-portfolio.page.scss'],
})

export class DriverPortfolioPage implements OnInit {
  selectedDriver: Driver = new Driver();

  drivers: Driver[] = [
    { driverName: 'Roberto Nuñez', enterprise: 'Transporte Espinal' },
    { driverName: 'Luis Sanchez', enterprise: 'Transporte Lupita' },
  ];

  constructor(public alertController: AlertController, public modalController: ModalController) { }

  ngOnInit() {
  }



  async presentModal() {
    const modal = await this.modalController.create({
      component: DriverPortfolioPage
    });
    return await modal.present();
  }

  // AGREGAR UN NUEVO CONDUCTOR
  async add(driver: Driver) {
    const alert = await this.alertController.create({
      header: 'Agregar nuevo conductor',
      inputs: [
        {
          name: 'userName',
          type: 'text',
          placeholder: 'Nombre Completo'
        },
        {
          name: 'enterprise',
          type: 'text',
          placeholder: 'Nombre de Empresa'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Submit',
          handler: (alertData) => {
            this.selectedDriver.driverName = alertData.userName;
            this.selectedDriver.enterprise = alertData.enterprise;
            this.drivers.push(this.selectedDriver);
            this.verValor();
          }
        }
      ]
    });
    await alert.present();
  }

  verValor() {
    console.log(this.selectedDriver);
  }

  //ELIMINAR UN CONDUCTOR
  async delete(driver: Driver) {
    let msg = `¿Quieres eliminar el conductor ${driver.driverName} de la empresa ${driver.enterprise}?`
    const alert = await this.alertController.create({
      header: "Aviso",
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'OK',
          handler: (alertData) => {
            this.drivers.splice(alertData, 1);
            console.log('Conductor ' + driver.driverName + ' eliminado');
          }
        }
      ]
    });

    await alert.present();
  }

  // ACTUALIZAR UN CONDUCTOR
  async update(driver: Driver) {
    let msg = `¿Quieres actualizar el conductor ${driver.driverName} de la empresa ${driver.enterprise}?`
    const alert = await this.alertController.create({
      header: "Actualizar datos",
      message: msg,
      // inputs: [
      //   {
      //     name: 'userName',
      //     type: 'text',
      //     placeholder: 'Nombre Completo'
      //   },
      //   {
      //     name: 'enterprise',
      //     type: 'text',
      //     placeholder: 'Nombre de Empresa'
      //   }
      // ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'OK',
          handler: (alertData) => {
            this.add(this.selectedDriver = driver);
            console.log(this.selectedDriver);
          }
        }
      ]
    })

    await alert.present();
  }

  // AGREGAR CONDUCTOR COMO FAVORITO
  async favorite(driver: Driver) {
    let msg = `¿Quieres marcar como favorito el conductor ${driver.driverName} de la empresa ${driver.enterprise}?`
    const alert = await this.alertController.create({
      header: "Aviso",
      message: msg,
      buttons: ['Cancel', 'OK',]
    })

    await alert.present();
  }

}