import { VeiculoModel } from "@/model/VeiculoModel";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class VeiculoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/veiculo",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<VeiculoModel> {
    try {
      return (await this.axiosClient.get<VeiculoModel>(`?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAll(): Promise<VeiculoModel[]> {
    try {
      return (await this.axiosClient.get<VeiculoModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(veiculo: VeiculoModel): Promise<void> {
    try {
      return (await this.axiosClient.post(``, veiculo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async atualizar(veiculo: VeiculoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data;
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
export default new VeiculoClient();
