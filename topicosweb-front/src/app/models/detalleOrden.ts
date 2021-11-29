import { Orden } from "./orden";
import { Producto } from "./producto";

export interface DetalleOrden {
    idDetalleOrden: String
    orden: Orden
    producto: Producto
    cantidad: number
    total: number
}