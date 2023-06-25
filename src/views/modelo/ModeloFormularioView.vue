<template>
    <HeaderComponent />
    <FormHeaderComponent />
    <div class="container">
        <hr />
        <div v-if="mensagem.ativo" class="row">
            <div class="col-md-12 text-start">
                <div :class="mensagem.css" role="alert">
                    <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 text-start">
                <label class="form-label">Nome do Modelo *</label>
                <input type="text" class="form-control" v-model="modelo.nome" required>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 text-start">
                <label class="form-label">Marca *</label>
                <input type="text" class="form-control" v-model="modelo.marca" required>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { ModeloModel } from '@/model/ModeloModel';
import { defineComponent } from 'vue';
import FormHeaderComponent from '@/components/FormHeaderComponent.vue';

export default defineComponent({
    name: "ModeloFormulario",
    data() {
        return {
            modelo: new ModeloModel(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            }
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
    components: { HeaderComponent, FormHeaderComponent }
});

</script>

<style scoped lang="scss">
.form-control {
    outline: none;
    box-shadow: none;
    border-color: #ced4da;
}
</style>