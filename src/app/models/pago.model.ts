import { Boleta } from "./boleta.model";

export class Pago {
    cod_pago?:number;
    fecha_pago?: Date;
    cod_boleta?: Boleta;
}
