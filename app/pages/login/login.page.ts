import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  handlerMessage = '';

  constructor(private loginAlumno: Router, private loginProfesor: Router, private menuController: MenuController) {
  }

  ngOnInit() {
  }

  redirectProfesor() {
    this.loginProfesor.navigate(['/login-profesor']);
  }
  redirectAlumno() {
    this.loginAlumno.navigate(['/login-alumno']);
  }

  mostrarMenu() {
    this.menuController.open('first');
  }



}
