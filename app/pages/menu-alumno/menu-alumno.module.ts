import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAlumnoPageRoutingModule } from './menu-alumno-routing.module';

import { MenuAlumnoPage } from './menu-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAlumnoPageRoutingModule
  ],
  declarations: [MenuAlumnoPage]
})
export class MenuAlumnoPageModule {}
