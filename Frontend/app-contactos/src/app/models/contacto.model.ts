export class Contacto{
    _id?: number;
    nombre: string;
    apellidos: string;
    email: string;
    celular: number;
    fechaNacimiento: Date;
    direcccion: string;
    tipoDeContacto: string;
    origen: string;

    constructor(nombre: string, apellidos: string,email: string,celular: number,fechaNacimiento: Date,direcccion: string, tipoDeContacto: string, origen: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.celular = celular;
        this.fechaNacimiento = fechaNacimiento;
        this.direcccion = direcccion;
        this.tipoDeContacto = tipoDeContacto;
        this.origen = origen;

    }

}