import { ConfiguracaoModel } from "@/model/ConfiguracaoModel";
import axios, { AxiosInstance } from "axios";

export class ConfiguracaoClient {
    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: {'Content-type' : 'application/json'}
        })
    }

    public async findById(id: number) : Promise<ConfiguracaoModel> {
        try {
            return(await this.axiosClient.get<ConfiguracaoModel>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(configuracao: ConfiguracaoModel) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, configuracao)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async atualizar(configuracao: ConfiguracaoModel) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${configuracao.id}`, configuracao)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
}