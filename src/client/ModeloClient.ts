import { ModeloModel } from "@/model/ModeloModel";
import axios, { AxiosInstance } from "axios";


export class ModeloClient {
    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-type' : 'application/json'}
        })
    }

    public async findById(id: number) : Promise<ModeloModel> {
        try {
            return (await this.axiosClient.get<ModeloModel>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<ModeloModel[]> {
        try {
            return (await this.axiosClient.get<ModeloModel[]>(`/lista`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo: ModeloModel) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, modelo)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
    
    public async atualizar(modelo: ModeloModel) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${modelo.id}`, modelo)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(modelo: ModeloModel) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${modelo.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }
}
export default new ModeloClient();