import { AbstractEntity } from "./AbstactEntityModel"

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