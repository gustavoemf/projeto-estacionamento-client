import { AbstractEntity } from "./AbstactEntityModel";
import { Condutor } from "./CondutorModel";
import { Veiculo } from "./VeiculoModel";

export class Movimentacao extends AbstractEntity {
    veiculo!: Veiculo
    condutor!: Condutor
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

    constructor(){
        super()
        this.ativo = true
        this.veiculo = new Veiculo
        this.condutor = new Condutor
    }
}