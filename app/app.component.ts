import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController) { }
  componentes: Componente[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirectTo: '/inicio'
    },
    {
      icon: 'log-in-outline',
      name: 'Login',
      redirectTo: '/login'
    },
    {
      icon: 'settings-outline',
      name: 'Configuracion',
      redirectTo: '/configuracion'
    }
  ];

}
