import axios, { AxiosInstance } from "axios";


export class MovimentacaoClient {
    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: {'Content-type' : 'application/json'}
        })
    }
}