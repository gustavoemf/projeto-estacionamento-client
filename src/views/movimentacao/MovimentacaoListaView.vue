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
                            <th class="col-md-1">{{ item.id }}</th>
                            <th class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th class="text-start">{{ item.condutor }}</th>
                            <th class="text-start">{{ item.veiculo }}</th>
                            <th class="text-start">{{ item.entrada }}</th>
                            <th class="text-start">{{ item.saida }}</th>
                            <th class="text-start">{{ item.valorMulta }}</th>
                            <th class="text-start">{{ item.valorTotal }}</th>
                            <th class="col-md-2">
                                <div class="btn-group" role="group">
                                    <router-link type="button" class="btn btn-sm btn-warning"
                                        :to="{ name: 'marca-formulario-editar-view', query: { id: item.id, form: 'editar' } }">
                                        Editar
                                    </router-link>
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
            movimentacoesLista: new Array<MovimentacaoModel>()
        }
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
        onClickExcluir(id: number) {
            MovimentacaoClient.excluir(id)
                .then((sucess) => {
                    this.movimentacao = new MovimentacaoModel();
                    console.log(sucess);
                    this.findAll();
                })
                .catch((error) => {
                    console.log(error.data);
                });
        }
    }
});
</script>