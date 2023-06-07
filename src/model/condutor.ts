import { AbstractEntity } from "./abstract-entity"

export class Condutor extends AbstractEntity {
    nome!: String
    cpf!: String
    telefone!: String
    tempoPago!: Date
    tempoDesconto!: Date

    constructor(){
        super()
        this.ativo = true
    }
}