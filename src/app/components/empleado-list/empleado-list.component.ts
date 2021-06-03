import { Empleado } from './../../model/Empleado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss']
})
export class EmpleadoListComponent implements OnInit {

  listEmpleados: Empleado[] = [
    { legado: 1, nombre: 'Juan', apellidos: 'Perez',
    sexo: "Masculino", salario: 25000 },
    { legado: 2, nombre: 'Marcos', apellidos: 'Gonzalez',
    sexo: "Masculino", salario: 65000 },
    { legado: 3, nombre: 'Marta', apellidos: 'Garcia',
    sexo: "Femenino", salario: 75000 },
    { legado: 4, nombre: 'Ignacio', apellidos: 'Cortes',
    sexo: "Masculino", salario: 55000 },
    { legado: 5, nombre: 'Maria', apellidos: 'Navarro',
    sexo: "Femenino", salario: 80000 }
  ]

  radioButtonSeleccionado = 'todos';
  
  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelect: string): void {
    this.radioButtonSeleccionado = radioButtonSelect
  }

}
