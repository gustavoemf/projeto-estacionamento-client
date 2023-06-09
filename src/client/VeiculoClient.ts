import { VeiculoModel } from "@/model/VeiculoModel";
import { CorModel } from "@/model/enums/CorModel";
import { TipoModel } from "@/model/enums/TipoModel";
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
      return (await this.axiosClient.get<VeiculoModel>(`/${id}`)).data;
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

  public async findCor(): Promise<CorModel[]> {
    try {
      const response: AxiosResponse<CorModel[]> = await this.axiosClient.get(
        "/cores"
      );
      return response.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findTipo(): Promise<TipoModel[]> {
    try {
      const response: AxiosResponse<TipoModel[]> = await this.axiosClient.get(
        "/tipos"
      );
      return response.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(veiculo: VeiculoModel): Promise<string> {
    try {
      return (await this.axiosClient.post<string>(``, veiculo)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async editar(id: number, veiculo: VeiculoModel): Promise<string> {
    try {
      return (await this.axiosClient.put<string>(`/${id}`, veiculo)).data;
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
