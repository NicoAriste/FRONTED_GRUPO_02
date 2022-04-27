import { Administrador } from "./administrador.model";
import { Edificio } from "./edificio.model";
import { Propietario } from "./propietario.model";

export class Departamento {
    cod_departamento?:number;
    num_departamento?: number;
    piso_departamento?: number;
    estado?: number;
	condiciones_departamento?:string;
    metros_cuadrados?: number;
    tipo_departamento?: number;
    

    cod_edificio?: Edificio;
    cod_propietario?: Propietario;
    cod_admin?: Administrador

    
}
