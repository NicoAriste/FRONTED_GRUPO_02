import { Usuario } from "./usuario.model";

export class Propietario {
    cod_propietario?:number;
    nom_propietario?:string;
    dni_propietario ?: string; 
    edad_propietario?: number;
    correo_propietario ?: string;
    fecha_incio_contrato?: Date;
    fecha_fin_contrato?: Date;
    cod_usuario?:Usuario
	
}
