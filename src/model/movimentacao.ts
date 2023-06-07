import { AbstractEntity } from "./abstract-entity";
import { Condutor } from "./condutor";
import { Veiculo } from "./veiculo";

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