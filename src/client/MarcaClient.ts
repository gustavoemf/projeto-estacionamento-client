import { MarcaModel } from '@/model/MarcaModel';
import axios, { AxiosInstance } from 'axios';

export class MarcaClient {
    private axiosClient: AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Conten-type' : 'application/json'}
        })
    }
    
    public async findById(id: number) : Promise<MarcaModel> {
        try{
            return(await this.axiosClient.get<MarcaModel>(`?id=${id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async findAll() : Promise<MarcaModel[]> {
        try {
            return (await this.axiosClient.get<MarcaModel[]>(`/lista`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca: MarcaModel) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, marca)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
    
    public async atualizar(id: number, marca: MarcaModel) : Promise<void> {
        try{
            return (await this.axiosClient.put(`/${id}`, marca)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }

    public async excluir(marca: MarcaModel) : Promise<void> {
        try{
            return (await this.axiosClient.delete(`/${marca.id}`)).data
        }
        catch(error:any){
            return Promise.reject(error.response)
        }
    }
}