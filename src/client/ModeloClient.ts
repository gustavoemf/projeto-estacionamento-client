import { ModeloModel } from "@/model/ModeloModel";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class ModeloClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/modelo",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<ModeloModel> {
    try {
      return (await this.axiosClient.get<ModeloModel>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAll(): Promise<ModeloModel[]> {
    try {
      return (await this.axiosClient.get<ModeloModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(modelo: ModeloModel): Promise<string> {
    try {
      return (await this.axiosClient.post<string>(``, modelo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, modelo: ModeloModel): Promise<string> {
    try {
      return (await this.axiosClient.put<string>(`/${id}`, modelo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async excluir(id: number): Promise<string> {
    try {
      const response: AxiosResponse<string> = await this.axiosClient.delete(
        ``,
        { params: { id } }
      );
      return response.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
export default new ModeloClient();
