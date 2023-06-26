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
            condutoresLista: new Array<CondutorModel>(),
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
            CondutorClient.findAll()
                .then(sucess => {
                    this.condutoresLista = sucess
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onClickEditar(id: number) {
            this.$router.push({ name: 'condutor-formulario-editar-view', params: { id } });
        },
        onClickExcluir(id: number) {
            if (confirm('Tem certeza de que deseja excluir este condutor?')) {
                CondutorClient.excluir(id)
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