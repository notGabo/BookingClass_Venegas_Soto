import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginProfesorPage } from './login-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: LoginProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginProfesorPageRoutingModule {}
