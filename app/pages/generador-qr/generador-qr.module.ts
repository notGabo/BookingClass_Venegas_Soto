import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneradorQrPageRoutingModule } from './generador-qr-routing.module';

import { GeneradorQrPage } from './generador-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneradorQrPageRoutingModule
  ],
  declarations: [GeneradorQrPage]
})
export class GeneradorQrPageModule { }
