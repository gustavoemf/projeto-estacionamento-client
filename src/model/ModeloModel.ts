import { AbstractEntity } from "./AbstactEntityModel"
import { MarcaModel } from "./MarcaModel"

export class ModeloModel extends AbstractEntity {
    nome!: string
    marca!: MarcaModel
}