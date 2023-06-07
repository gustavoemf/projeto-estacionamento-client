import { AbstractEntity } from "./abstract-entity"
import { Cor } from "./enums/cor"
import { Tipo } from "./enums/tipo"
import { Modelo } from "./modelo"

export class Veiculo extends AbstractEntity {
    placa!: String
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