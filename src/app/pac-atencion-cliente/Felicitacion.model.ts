export class Felicitacion {
  public nombre: string="";
  public felicitacion: string="";
  public nombreDoctor: string="";
  public areaOespecialidad: string="";


  public Crear_Felicitacion(nombre: string, felicitacion: string) {
    console.log('*************************\n\n');
    console.log(`FORMATO DE FELICITACION:`);
    console.log(`NOMBRE: ${nombre}`);
    console.log(`COMENTARIO DE FELICITACION: ${felicitacion}` + '\n\n');
    console.log('*************************\n\n');
  }

  

  public Crear_FelicitacionPersonalizada(
    nombre: string,
    felicitacion: string,
    nombreDoctor: string,
    areaOespecialidad: string
  ){
    console.log('*************************\n\n');
    console.log(`MUCHAS GRACIAS AL DOCTOR ${nombreDoctor}`);
    console.log(
      `DEDICANDO SUS CONOCIMIENTOS Y HABILIDADES EN EL AREA DE : ${areaOespecialidad}` +
        '\n\n'
    );
    console.log(
      `POR SU GRAN LABOR DURANTE LA ATENCION AL PACIENTE ${this.nombre}\n\n`
    );
    console.log(
      `DE PARTE DEL PACIENTE ${this.nombre} SE LE DEDICA EL SIGUIENTE MENSAJE:` +
        '\n\n'
    );
    console.log(`${felicitacion}` + '\n\n');
    console.log('*************************\n\n');
  }
}
