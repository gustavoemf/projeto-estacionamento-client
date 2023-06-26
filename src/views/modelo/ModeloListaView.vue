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
                        <tr v-for="item in modeloList" :key="item.id">
                            <th class="col-md-1">{{ item.id }}</th>
                            <th class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th class="text-start">{{ item.nome }}</th>
                            <th class="text-start">{{ item.marca.nome }}</th>
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
            modeloList: new Array<ModeloModel>(),
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
            ModeloClient.findAll()
                .then(sucess => {
                    this.modeloList = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onClickEditar(id: number) {
            this.$router.push({ name: 'modelo-formulario-editar-view', params: { id } });
        },
        onClickExcluir(id: number) {
            if (confirm('Tem certeza de que deseja excluir este modelo?')) {
                ModeloClient.excluir(id)
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