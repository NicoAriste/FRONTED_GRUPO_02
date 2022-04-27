import { TipodeIncidente } from "./tipodeIncidente.model";
import { Usuario } from "./usuario.model";


export class Incidente {
    cod_inc?:number;
    desc_inc?: string;
    fecha_reg_inc?: Date;
    estado_inc?: number;
    cod_tipoinc?: TipodeIncidente;
}
