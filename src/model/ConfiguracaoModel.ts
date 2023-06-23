import { AbstractEntity } from "./AbstactEntityModel"

export class ConfiguracaoModel extends AbstractEntity{
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
}