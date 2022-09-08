import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetValueService {

  public static numero: string;
  public static codigo: string;
  public static horaInicio: string;
  public static horaTermino: string;
  public static sala: string;
  public static correoProfesor: string;
  public static correoAlumno: string;
  constructor() { }
}
