import { Component, OnInit } from '@angular/core';
import { GetValueService } from 'src/app/services/get-value.service';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public getCorreoAlumno() {
    return GetValueService.correoAlumno;
  }
}
