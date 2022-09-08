import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProfesorPage } from './home-profesor.page';

const routes: Routes = [
  {
    path: '',
    component: HomeProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeProfesorPageRoutingModule {}
