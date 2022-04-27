import { Usuario } from "./usuario.model";

export class Boleta {
    cod_boleta?:number;
	servicio_boleta?:string;
    monto_boleta ?: DoubleRange; 
    mes_boleta ?: DoubleRange;
    fecha_reg_boleta?: Date;
    fecha_venc_boleta?: Date;
    cod_usuario?: Usuario;

    
}
