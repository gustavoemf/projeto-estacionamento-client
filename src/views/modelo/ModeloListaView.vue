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
                            <th scope="col" class="text-start">Nome</th>
                            <th scope="col" class="text-start">Marca</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="item in modelosList" :key="item.id">
                            <th class="col-md-1">{{ item.id }}</th>
                            <th class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th class="text-start">{{ item.nome }}</th>
                            <th class="text-start">{{ item.marca }}</th>
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
import { ModeloModel } from '@/model/ModeloModel';
import ListHeaderComponent from '@/components/ListHeaderComponent.vue';
import ModeloClient from '@/client/ModeloClient';

export default defineComponent({
    name: 'ModeloLista',
    components: {
        HeaderComponent,
        ListHeaderComponent
    },
    data() {
        return {
            modelo: new ModeloModel,
            modelosList: new Array<ModeloModel>()
        }
    },
    methods: {
        findAll() {
            ModeloClient.findAll()
                .then(sucess => {
                    this.modelosList = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onClickExcluir(id: number) {
            ModeloClient.excluir(id)
                .then((sucess) => {
                    this.modelo = new ModeloModel();
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