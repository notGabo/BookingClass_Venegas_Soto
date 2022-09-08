import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async sobreNosotros() {
    const alert = await this.alertController.create({
      header: 'Acerca de nosotros',
      subHeader: 'Somos un equipo de 2 estudiantes que estamos desarrollando esta aplicación para la asignatura de Desarrollo de apliciones moviles de manera hibrida.',
      message: '<img src="./assets/logo.png" class="logo" alt="">',
      cssClass: 'aboutUs'


    });
    await alert.present();
  }
}
