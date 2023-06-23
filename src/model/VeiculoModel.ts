import { AbstractEntity } from "./AbstactEntityModel"
import { CorModel } from "./enums/CorModel"
import { TipoModel } from "./enums/TipoModel"
import { ModeloModel } from "./ModeloModel"

export class VeiculoModel extends AbstractEntity {
    placa!: string
    modelo!: ModeloModel
    cor!: CorModel
    tipo!: TipoModel
    ano!: number
}