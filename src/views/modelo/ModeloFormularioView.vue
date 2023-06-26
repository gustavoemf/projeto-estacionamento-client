<template>
    <HeaderComponent />
    <FormHeaderComponent />
    <div class="container">
        <hr />
        <div class="row">
            <div class="col-md-6 text-start">
                <label class="form-label">Nome do Modelo *</label>
                <input type="text" class="form-control" v-model="modelo.nome" required>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 text-start">
                <label class="form-label">Marca *</label>
                <select class="form-select" v-model="modelo.marca" required>
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
            marcaList: [] as MarcaModel[]
        };
    },
    computed: {
        id() {
            return this.$route.query.id;
        },
        form() {
            return this.$route.query.form;
        }
    },
    methods: {
        onClickCadastrar() {
            ModeloClient.cadastrar(this.modelo)
                .then((sucess) => {
                    this.modelo = new ModeloModel();
                    console.log(sucess);
                })
                .catch((error) => {
                    console.log(error.data);
                });
        },
        selectMarcaList() {
            MarcaClient.findAll()
                .then((response) => {
                    this.marcaList = response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }
});

</script>

<style scoped lang="scss">
.row {
    margin-top: 10px;
}

.form-control {
    outline: none;
    box-shadow: none;
    border-color: #ced4da;
}
</style>