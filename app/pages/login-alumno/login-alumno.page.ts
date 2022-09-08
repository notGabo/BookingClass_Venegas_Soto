import { Component, OnInit } from '@angular/core';
import { GetValueService } from 'src/app/services/get-value.service';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  alumno = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Formulario enviado');
    console.log(this.alumno);
    GetValueService.correoAlumno = this.alumno.email.slice();

  };
}

