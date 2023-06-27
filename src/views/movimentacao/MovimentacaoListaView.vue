<template>
    <HeaderComponent />
    <ListHeaderComponent />
    <div class="container">
        <hr />
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead class="table-secondary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Ativo</th>
                            <th scope="col" class="text-start">Condutor</th>
                            <th scope="col" class="text-start">Veiculo</th>
                            <th scope="col">Entrada</th>
                            <th scope="col">Saida</th>
                            <th scope="col">Multa</th>
                            <th scope="col">Total</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="item in movimentacoesLista" :key="item.id">
                            <th class="col-md-1 text-center">{{ item.id }}</th>
                            <th class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th class="text-start">{{ item.condutor.nome }}</th>
                            <th class="text-start">{{ item.veiculo.placa }}</th>
                            <th class="text-center">{{ item.entrada }}</th>
                            <th class="text-center">{{ item.saida || 'Em aberto' }}</th>
                            <th class="text-end">R${{ item.valorMulta }}</th>
                            <th class="text-end">R${{ item.valorTotal }}</th>
                            <th class="col-md-2">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-sm btn-warning" @click="onClickEditar(item.id)">
                                        Editar
                                    </button>
                                    <button type="button" class="btn btn-sm btn-danger" @click="onClickExcluir(item.id)">
                                        Excluir
                                    </button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { MovimentacaoModel } from '@/model/MovimentacaoModel';
import ListHeaderComponent from '@/components/ListHeaderComponent.vue';
import MovimentacaoClient from '@/client/MovimentacaoClient';

export default defineComponent({
    name: 'MovimentacaoLista',
    components: {
        HeaderComponent,
        ListHeaderComponent
    },
    data() {
        return {
            movimentacao: new MovimentacaoModel,
            movimentacoesLista: new Array<MovimentacaoModel>(),
            alert: {
                confirm: false as boolean,
                response: "" as string,
                message: "" as string,
                style: "" as string
            }
        }
    },
    mounted() {
        this.findAll();
    },
    methods: {
        findAll() {
            MovimentacaoClient.findAll()
                .then(sucess => {
                    this.movimentacoesLista = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onClickEditar(id: number) {
            this.$router.push({ name: 'movimentacao-formulario-editar-view', params: { id } });
        },
        onClickExcluir(id: number) {
            if (confirm('Tem certeza de que deseja excluir esta movimentação?')) {
                MovimentacaoClient.excluir(id)
                    .then((sucess) => {
                        this.findAll();

                        this.alert.confirm = true;
                        this.alert.response = sucess;
                        this.alert.style = "alert alert-success d-flex align-items-center alert-dismissible fade show";
                    })
                    .catch((error) => {
                        console.log(error);

                        this.alert.confirm = false;
                        this.alert.response = error;
                        this.alert.style = "alert alert-danger d-flex align-items-center alert-dismissible fade show";
                    });
            }
        }
    }
});
</script>