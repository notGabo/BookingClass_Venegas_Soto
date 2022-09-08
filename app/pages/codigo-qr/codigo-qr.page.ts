import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { GetValueService } from 'src/app/services/get-value.service';


@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})


export class CodigoQRPage implements OnInit {


  public getNumeroClase() {
    return GetValueService.numero;
  };

  public getCodigoClase() {
    return GetValueService.codigo;
  };

  public getHoraInicio() {
    return GetValueService.horaInicio;
  };

  public getHoraTermino() {
    return GetValueService.horaTermino;
  };

  public getSala() {
    return GetValueService.sala;
  };

  public randomNumber() {
    return Math.floor(Math.random() * 100);
  }
  constructor() {

  }

  ngOnInit() {
  }



}






