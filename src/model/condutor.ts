import { AbstractEntity } from "./abstract-entity"

export class Condutor extends AbstractEntity {
    nome!: string
    cpf!: string
    telefone!: string
    tempoPago!: Date
    tempoDesconto!: Date

    constructor(){
        super()
        this.ativo = true
    }
}