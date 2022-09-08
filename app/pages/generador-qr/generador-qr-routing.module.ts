import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneradorQrPage } from './generador-qr.page';

const routes: Routes = [
  {
    path: '',
    component: GeneradorQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneradorQrPageRoutingModule {}
