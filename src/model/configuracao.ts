import { AbstractEntity } from "./abstract-entity"

export class Configuracao extends AbstractEntity{
    valorHora!: number
    valorMinutoMulta!: number
    inicioExpediente!: Date
    fimExpediente!: Date
    gerarDesconto!: boolean
    tempoParaDesconto!: Date
    tempoGanhoDeDesconto!: Date
    vagasCarro!: number
    vagasMoto!: number
    vagasVan!: number

    constructor(){
        super()
        this.ativo = true
    }
}