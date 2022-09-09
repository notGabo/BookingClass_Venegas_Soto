import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  constructor(private menuController: MenuController, private router: Router) { }
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

  public hasMenu = true;

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event.url in ['/', '/codigo-qr', '/escanear-qr', '/configuracion', '/generador-qr', '/home-alumno', '/home-profesor', '/login-alumno', '/login-profesor', '/menu-alumno', '/register']) {
        this.hasMenu = false;
      }
      else {
        this.hasMenu = true;
      }
    });
  };
}
