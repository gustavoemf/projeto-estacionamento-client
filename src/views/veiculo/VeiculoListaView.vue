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
                            <th scope="col" class="text-start">Placa</th>
                            <th scope="col" class="text-start">Modelo</th>
                            <th scope="col" class="text-start">Cor</th>
                            <th scope="col" class="text-start">Tipo</th>
                            <th scope="col">Ano</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="item in veiculosLista" :key="item.id">
                            <th class="col-md-1">{{ item.id }}</th>
                            <th class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th class="text-start">{{ item.placa }}</th>
                            <th class="text-start">{{ item.modelo.nome }}</th>
                            <th class="text-start">{{ item.cor }}</th>
                            <th class="text-start">{{ item.tipo }}</th>
                            <th class="text-start">{{ item.ano }}</th>
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
import { VeiculoModel } from '@/model/VeiculoModel';
import ListHeaderComponent from '@/components/ListHeaderComponent.vue';
import VeiculoClient from '@/client/VeiculoClient';

export default defineComponent({
    name: 'VeiculoLista',
    components: {
        HeaderComponent,
        ListHeaderComponent
    },
    data() {
        return {
            veiculo: new VeiculoModel,
            veiculosLista: new Array<VeiculoModel>(),
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
            VeiculoClient.findAll()
                .then(sucess => {
                    this.veiculosLista = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onClickEditar(id: number) {
            this.$router.push({ name: 'veiculo-formulario-editar-view', params: { id } });
        },
        onClickExcluir(id: number) {
            if (confirm('Tem certeza de que deseja excluir esta veículo?')) {
                VeiculoClient.excluir(id)
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