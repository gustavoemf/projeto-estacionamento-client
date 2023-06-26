import { CondutorModel } from "@/model/CondutorModel";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class CondutorClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/condutor",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<CondutorModel> {
    try {
      return (await this.axiosClient.get<CondutorModel>(`/${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAll(): Promise<CondutorModel[]> {
    try {
      return (await this.axiosClient.get<CondutorModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(condutor: CondutorModel): Promise<string> {
    try {
      return (await this.axiosClient.post<string>(``, condutor)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, marca: CondutorModel): Promise<string> {
    try {
      return (await this.axiosClient.put<string>(`/${id}`, marca)).data;
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
export default new CondutorClient();
