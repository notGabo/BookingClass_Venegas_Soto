import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoQRPage } from './codigo-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoQRPageRoutingModule {}
