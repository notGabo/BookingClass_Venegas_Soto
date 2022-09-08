import { Component, OnInit } from '@angular/core';
import { GetValueService } from 'src/app/services/get-value.service';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.page.html',
  styleUrls: ['./login-profesor.page.scss'],
})
export class LoginProfesorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profesor = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Formulario enviado');
    console.log(this.profesor);
    GetValueService.correoProfesor = this.profesor.email.slice();
  };

}
