<template>
    <HeaderComponent />
    <div v-if="alert.confirm" class="row" style="width: 50%; margin: 10px auto;">
        <div class="col-md-12 text-start">
            <div :class="alert.style" role="alert">
                <strong>{{ alert.response }}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        </div>
    </div>
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
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="item in marcasList" :key="item.id">
                            <th class="col-md-1 text-center">{{ item.id }}</th>
                            <th class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th class="text-start">{{ item.nome }}</th>
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
import { MarcaModel } from '@/model/MarcaModel'
import ListHeaderComponent from '@/components/ListHeaderComponent.vue';
import MarcaClient from '@/client/MarcaClient';

export default defineComponent({
    name: 'MarcaLista',
    components: {
        HeaderComponent,
        ListHeaderComponent
    },
    data() {
        return {
            marca: new MarcaModel,
            marcasList: new Array<MarcaModel>(),
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
            MarcaClient.findAll()
                .then(sucess => {
                    this.marcasList = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onClickEditar(id: number) {
            this.$router.push({ name: 'marca-formulario-editar-view', params: { id } });
        },
        onClickExcluir(id: number) {
            if (confirm('Tem certeza de que deseja excluir esta marca?')) {
                MarcaClient.excluir(id)
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
    },
});
</script>