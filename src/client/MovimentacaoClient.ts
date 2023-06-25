import { MovimentacaoModel } from "@/model/MovimentacaoModel";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class MovimentacaoClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: "http://localhost:8080/api/movimentacao",
      headers: { "Content-type": "application/json" },
    });
  }

  public async findById(id: number): Promise<MovimentacaoModel> {
    try {
      return (await this.axiosClient.get<MovimentacaoModel>(`?id=${id}`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async findAll(): Promise<MovimentacaoModel[]> {
    try {
      return (await this.axiosClient.get<MovimentacaoModel[]>(`/lista`)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async cadastrar(movimentacao: MovimentacaoModel): Promise<void> {
    try {
      return (await this.axiosClient.post(``, movimentacao)).data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }

  public async atualizar(movimentacao: MovimentacaoModel): Promise<void> {
    try {
      return (await this.axiosClient.put(`/${movimentacao.id}`, movimentacao))
        .data;
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
export default new MovimentacaoClient();
