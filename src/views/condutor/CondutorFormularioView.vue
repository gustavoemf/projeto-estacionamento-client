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
        <label class="form-label">Nome *</label>
        <input type="text" class="form-control" v-model="condutor.nome" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">CPF *</label>
        <input type="text" class="form-control" v-model="condutor.cpf" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Telefone *</label>
        <input type="tel" class="form-control" pattern="[0-9]{2}\s?[0-9]{4,5}-?[0-9]{4}" v-model="condutor.telefone" required>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { CondutorModel } from '@/model/CondutorModel';
import { defineComponent } from 'vue';
import FormHeaderComponent from '@/components/FormHeaderComponent.vue';

export default defineComponent({
  name: "CondutorFormulario",
  data() {
    return {
      condutor: new CondutorModel (),
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