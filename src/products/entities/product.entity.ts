export class Product {
       id: number;
       nombre: string;
       direccion: string;
       barrio: string;
   
       constructor(id: number, nombre: string, direccion: string, barrio: string) {
           this.id = id;
           this.nombre = nombre;
           this.direccion = direccion;
           this.barrio = barrio;
       }
   }
   