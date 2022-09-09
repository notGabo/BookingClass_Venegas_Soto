import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registro = {
    email: '',
    password: '',
    repetirEmail: '',
    repetirPassword: ''
  };

  onSubmit() {
    console.log('Formulario enviado');
    console.log(this.registro);
  };

}
