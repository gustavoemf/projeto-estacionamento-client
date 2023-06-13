import axios, { AxiosInstance } from 'axios';

export class MarcaClient {
    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Conten-type' : 'application/json'}
        })
    }
}