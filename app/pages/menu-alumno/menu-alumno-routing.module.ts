import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAlumnoPage } from './menu-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAlumnoPageRoutingModule {}
