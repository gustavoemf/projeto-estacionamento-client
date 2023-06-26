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
            marcaList: [] as MarcaModel[],
            alert: {
                confirm: false as boolean,
                response: "" as string,
                message: "" as string,
                style: "" as string
            }
        };
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
                MarcaClient.editar(this.modelo.id, this.modelo)
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
        created() {
            const id = Number(this.$route.params.id);

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