import { CondutorModel } from "@/model/CondutorModel"
import axios, { AxiosInstance } from "axios"

export class CondutorClient {
    
    private axiosClient: AxiosInstance
    
    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-type' : 'application/json'}
        })
    }
    public async findById(id: number) : Promise<CondutorModel> {
        try {
            return (await this.axiosClient.get<CondutorModel>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<CondutorModel[]> {
        try {
            return (await this.axiosClient.get<CondutorModel[]>(`/lista`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor: CondutorModel) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, condutor)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async atualizar(condutor: CondutorModel) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${condutor.id}`, condutor)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(condutor: CondutorModel) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${condutor.id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
}