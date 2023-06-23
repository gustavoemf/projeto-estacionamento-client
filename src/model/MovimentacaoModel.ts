import { AbstractEntity } from "./AbstactEntityModel";
import { CondutorModel } from "./CondutorModel";
import { VeiculoModel } from "./VeiculoModel";

export class MovimentacaoModel extends AbstractEntity {
    condutor!: CondutorModel
    veiculo!: VeiculoModel
    entrada!: Date
    saida!: Date
    tempo!: Date
    tempoDesconto!: Date
    tempoMulta!: Date
    valorMinutoMulta!: number
    valorHora!: Date
    valorMulta!: Date
    valorNormal!: Date
    valorTotal!: Date
}