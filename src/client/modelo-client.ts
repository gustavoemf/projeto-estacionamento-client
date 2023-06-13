import axios, { AxiosInstance } from "axios";


export class ModeloClient {
    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-type' : 'application/json'}
        })
    }
}