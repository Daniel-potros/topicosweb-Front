export class Orden {
    id: String
    mesa: number
    fecha: string
    productos: string[]

    constructor() {
        this.id = ''
        this.mesa = 0
        this.fecha = ''
        this.productos = []
    }
}