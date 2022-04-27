
import { Incidente } from "./incidente.model";
import { Usuario } from "./usuario.model";

export class HistorialdeIncidente {
    cod_historial?:number;
    estado_historial?: number;
    fecha_reg_historial?: Date;

    cod_usuario?: Usuario;
    cod_inc?: Incidente;

    
}
