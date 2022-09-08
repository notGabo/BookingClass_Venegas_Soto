import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanearQrPage } from './escanear-qr.page';

const routes: Routes = [
  {
    path: '',
    component: EscanearQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanearQrPageRoutingModule {}
