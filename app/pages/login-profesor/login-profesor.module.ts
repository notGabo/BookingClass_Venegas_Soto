import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginProfesorPageRoutingModule } from './login-profesor-routing.module';

import { LoginProfesorPage } from './login-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginProfesorPageRoutingModule
  ],
  declarations: [LoginProfesorPage]
})
export class LoginProfesorPageModule {}
