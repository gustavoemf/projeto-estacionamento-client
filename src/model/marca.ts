import { AbstractEntity } from "./abstract-entity";

export class Marca extends AbstractEntity {
    nome!: String

    constructor(){
        super()
        this.ativo = true
    }
}