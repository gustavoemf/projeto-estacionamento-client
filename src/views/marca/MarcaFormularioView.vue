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
    <FormHeaderComponent @cadastrar="handleCadastrar"/>
    <div class="container">
        <hr />
        <div class="row margin-10">
            <div class="col-md-6 text-start">
                <label class="form-label">Nome da Marca *</label>
                <input type="text" class="form-control remover-borda" v-model="marca.nome" required>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { MarcaModel } from '@/model/MarcaModel';
import { defineComponent } from 'vue';
import FormHeaderComponent from '@/components/FormHeaderComponent.vue';
import MarcaClient from '@/client/MarcaClient';

export default defineComponent({
    name: "MarcaFormulario",
    components: {
        HeaderComponent,
        FormHeaderComponent
    },
    data() {
        return {
            marca: new MarcaModel(),
            alert: {
                confirm: false as boolean,
                response: "" as string,
                message: "" as string,
                style: "" as string
            }
        };
    },
    methods: {
        handleCadastrar() {
            if (this.marca.id) {
                MarcaClient.editar(this.marca.id, this.marca)
                    .then(() => {
                        this.$router.push({ name: 'marca-lista-view' });
                    })
                    .catch((error) => {
                        console.log(error.data);
                    });
            } else {
                MarcaClient.cadastrar(this.marca)
                    .then((sucess) => {
                        this.marca = new MarcaModel();

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
        }
    },
    created() {
        const id = Number(this.$route.params.id);

        if (!isNaN(id)) {
            MarcaClient.findById(id)
                .then((marca) => {
                    this.marca = marca;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
});
</script>