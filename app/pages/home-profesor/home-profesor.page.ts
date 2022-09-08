import { Component, OnInit } from '@angular/core';
import { GetValueService } from 'src/app/services/get-value.service';
@Component({
  selector: 'app-home-profesor',
  templateUrl: './home-profesor.page.html',
  styleUrls: ['./home-profesor.page.scss'],
})
export class HomeProfesorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public getCorreoProfesor() {
    return GetValueService.correoProfesor;
  }

}
