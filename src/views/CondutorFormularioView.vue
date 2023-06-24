<template>
  <HeaderComponent />
  <div class="container">
    <div class="row" id="header-lista">
      <div class="col-md-7 text-start" id="header-element-left">
        <p class="fs-3">Cadastrar/Editar Condutor</p>
      </div>
      <div class="col-md-2">
        <div class="d-grid gap-2" id="header-element-right">
          <button type="submit" class="btn btn-success">Salvar</button>
        </div>
      </div>
      <div class="col-md-2">
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-secondary" to="/condutor-lista">Voltar
          </router-link>
        </div>
      </div>
    </div>
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
        <input type="text" class="form-control" v-model="condutor.telefone" required>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { CondutorModel } from '@/model/CondutorModel';
import { defineComponent } from 'vue';

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
  components: { HeaderComponent }
});

</script>

<style scoped lang="scss">
#header-lista {
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  margin: 0px auto;
  margin-top: 30px;
}

.form-control {
  outline: none;
  box-shadow: none;
  border-color: #ced4da;
}
</style>