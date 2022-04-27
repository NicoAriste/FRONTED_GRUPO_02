import { Propietario } from "./propietario.model";
import { Visitante } from "./visitante.model";

export class Visita {
    cod_visita?:number;
    fecha_reg_visita?: Date;
    fecha_llegada_visita?: Date;
    fecha_salida_visita?: Date;
    cod_visitante?: Visitante;
    cod_propietario?: Propietario;
}
