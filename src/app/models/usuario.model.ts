import { Departamento } from "./departamento.model";
import { Mascota } from "./mascota.model";

export class Usuario {
    cod_usuario?:number;
	nom_usuario?:string;
    dni_usuario?: string;
    login ?: string; 
    clave ?: string;
    fecha_registro_usuario?: Date;
    estado?: number;
    cod_departamento?: Departamento;
    cod_mascota?: Mascota;

}
