import { Queja } from "./queja.model";

export class Reclamo extends Queja{

  constructor(public nombre:string, public reclamos:string){
      super();
  }

  public override queja(): void {
      console.log("*************************\n\n")
      console.log(`FORMATO DE RECLAMO:`);
      console.log(`NOMBRE: ${this.nombre}`);
      console.log(`COMENTARIO DE RECLAMO: ${this.reclamos}` + "\n\n");
      console.log("*************************\n\n")
  }
}
