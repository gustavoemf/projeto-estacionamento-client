import { AbstractEntity } from "./AbstactEntityModel"

export class CondutorModel extends AbstractEntity {
    nome!: string
    cpf!: string
    telefone!: string
    tempoPago!: Date
    tempoDesconto!: Date
}