<template>
    <HeaderComponent />
    <div v-if="alert.confirm" class="row response-message">
        <div class="col-md-12 text-start">
            <div :class="alert.style" role="alert">
                <strong>{{ alert.response }}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        </div>
    </div>
    <FormHeaderComponent @cadastrar="handleCadastrar" />
    <div class="container">
        <hr />
        <div class="row margin-10">
            <div class="col-md-6 text-start">
                <label class="form-label">Nome do Modelo *</label>
                <input type="text" class="form-control remover-borda" v-model="modelo.nome" required>
            </div>
        </div>
        <div class="row margin-10">
            <div class="col-md-6 text-start">
                <label class="form-label">Marca *</label>
                <select class="form-select remover-borda" v-model="modelo.marca" required>
                    <option :value="item" v-for="item in marcaList" :key="item.id">
                        {{ item.nome }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { ModeloModel } from '@/model/ModeloModel';
import { defineComponent } from 'vue';
import FormHeaderComponent from '@/components/FormHeaderComponent.vue';
import ModeloClient from '@/client/ModeloClient';
import MarcaClient from '@/client/MarcaClient';
import { MarcaModel } from '@/model/MarcaModel';

export default defineComponent({
    name: "ModeloFormulario",
    components: {
        HeaderComponent,
        FormHeaderComponent
    },
    data() {
        return {
            modelo: new ModeloModel(),
            marcaList: [] as MarcaModel[],
            alert: {
                confirm: false as boolean,
                response: "" as string,
                message: "" as string,
                style: "" as string
            }
        };
    },
    mounted() {
        this.selectMarcaList();
    },
    methods: {
        selectMarcaList() {
            MarcaClient.findAll()
                .then((response) => {
                    this.marcaList = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        }, handleCadastrar() {
            if (this.modelo.id) {
                ModeloClient.editar(this.modelo.id, this.modelo)
                    .then(() => {
                        this.$router.push({ name: 'modelo-lista-view' });
                    })
                    .catch((error) => {
                        console.log(error.data);
                    });
            } else {
                ModeloClient.cadastrar(this.modelo)
                    .then((sucess) => {
                        this.modelo = new ModeloModel();

                        this.alert.confirm = true;
                        this.alert.response = sucess;
                        this.alert.style = "alert alert-success d-flex align-items-center alert-dismissible fade show";
                    })
                    .catch((error) => {
                        console.log(error.data);

                        this.alert.confirm = false;
                        this.alert.response = error;
                        this.alert.style = "alert alert-danger d-flex align-items-center alert-dismissible fade show";
                    });
            }
        },
    }, created() {
        const id = Number(this.$route.params.id);

        if (!isNaN(id)) {
            ModeloClient.findById(id)
                .then((modelo) => {
                    this.modelo = modelo;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
});
</script>