import { Felicitacion } from './Felicitacion.model';
import { Queja } from './queja.model';

export class Adaptador_Comentario extends Queja {
  constructor(public Felicidades: Felicitacion,public nombre:string, public felicitacion:string, public nombreDoctor:string, public areaOespecialidad: string) {
    super();
  }

  public override queja(): void {
    this.Felicidades.Crear_Felicitacion(this.nombre,this.felicitacion);
  }

  public FPersonalizada(): void {
    this.Felicidades.Crear_FelicitacionPersonalizada(
      this.nombre,
      this.felicitacion,
      this.nombreDoctor,
      this.areaOespecialidad
    );
  }
}
