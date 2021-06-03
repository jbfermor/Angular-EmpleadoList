export class Empleado {
  legado: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  salario: number;

  constructor(legado: number, nombre: string, apellidos: string,
  sexo: string, salario: number) {
    this.legado = legado;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.sexo = sexo;
    this.salario = salario;
  }
    
}
