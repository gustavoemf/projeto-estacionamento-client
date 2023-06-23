import { VeiculoModel } from "@/model/VeiculoModel";
import axios, { AxiosInstance } from "axios";


export class VeiculoClient {
    
    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-type' : 'application/json'}
        })
    }

    public async findById(id: number) : Promise<VeiculoModel> {
        try {
            return (await this.axiosClient.get<VeiculoModel>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<VeiculoModel[]> {
        try {
            return (await this.axiosClient.get<VeiculoModel[]>(`/lista`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(veiculo: VeiculoModel) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, veiculo)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async atualizar(veiculo: VeiculoModel) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(veiculo: VeiculoModel) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${veiculo.id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
}