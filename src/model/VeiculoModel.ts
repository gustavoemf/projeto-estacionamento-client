import { AbstractEntity } from "./AbstactEntityModel"
import { Cor } from "./enums/CorModel"
import { Tipo } from "./enums/TipoModel"
import { Modelo } from "./ModeloModel"

export class Veiculo extends AbstractEntity {
    placa!: string
    modelo!: Modelo
    cor!: Cor
    tipo!: Tipo
    ano!: number

    constructor(){
        super()
        this.ativo = true
        this.modelo = new Modelo
    }
}