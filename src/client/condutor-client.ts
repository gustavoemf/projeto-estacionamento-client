import axios, { AxiosInstance } from "axios"

export class CondutorClient {
    private axiosClient: AxiosInstance
    
    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-type' : 'application/json'}
        })
    }
}