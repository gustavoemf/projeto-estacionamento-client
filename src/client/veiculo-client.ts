import axios, { AxiosInstance } from "axios";


export class VeiculoClient {
    
    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-type' : 'application/json'}
        })
    }
}