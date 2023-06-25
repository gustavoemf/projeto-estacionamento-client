<template>
    <HeaderComponent />
    <FormHeaderComponent />
    <div class="container">
        <hr />
        <div class="row">
            <div class="col-md-6 text-start">
                <label class="form-label">Nome da Marca *</label>
                <input type="text" class="form-control" v-model="marca.nome" required>
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
            marca: new MarcaModel()
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
            MarcaClient.cadastrar(this.marca)
                .then((sucess) => {
                    this.marca = new MarcaModel();
                    console.log(sucess);
                })
                .catch((error) => {
                    console.log(error.data);
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