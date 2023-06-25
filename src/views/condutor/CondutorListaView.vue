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
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Pago</th>
                            <th scope="col">Desconto</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">

                        <tr v-for="item in condutoresLista" :key="item.id">
                            <th class="col-md-1">{{ item.id }}</th>
                            <th class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th class="text-start">{{ item.nome }}</th>
                            <th class="text-start">{{ item.cpf }}</th>
                            <th class="text-start">{{ item.telefone }}</th>
                            <th class="text-end">{{ item.tempoPago }}</th>
                            <th class="text-end">{{ item.tempoDesconto }}</th>
                            <th class="col-md-2">
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
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
import { CondutorModel } from '@/model/CondutorModel';
import ListHeaderComponent from '@/components/ListHeaderComponent.vue';
import CondutorClient from '@/client/CondutorClient';

export default defineComponent({
    name: 'CondutorLista',
    components: {
        HeaderComponent,
        ListHeaderComponent
    },
    data() {
        return {
            condutor: new CondutorModel(),
            condutoresLista: new Array<CondutorModel>()
        }
    },
    methods: {
        findAll() {
            CondutorClient.findAll()
                .then(sucess => {
                    this.condutoresLista = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onClickExcluir(id: number) {
            CondutorClient.excluir(id)
                .then((sucess) => {
                    this.condutor = new CondutorModel();
                    console.log(sucess);
                    this.findAll();
                })
                .catch((error) => {
                    console.log(error.data);
                });
        },
    }
});
</script>