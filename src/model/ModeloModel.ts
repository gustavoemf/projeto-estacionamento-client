import { AbstractEntity } from "./AbstactEntityModel"
import { Marca } from "./MarcaModel"

export class Modelo extends AbstractEntity {
    nome!: string
    marca!: Marca

    constructor(){
        super()
        this.ativo = true
    }
}