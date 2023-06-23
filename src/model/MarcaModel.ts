import { AbstractEntity } from "./AbstactEntityModel";

export class Marca extends AbstractEntity {
    nome!: string

    constructor(){
        super()
        this.ativo = true
    }
}