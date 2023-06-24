<template>
  <HeaderComponent />
  <div class="container">
    <div class="row" id="header-lista">
      <div class="col-md-7 text-start" id="header-element-left">
        <p class="fs-3">Cadastrar/Editar Veículo</p>
      </div>
      <div class="col-md-2">
        <div class="d-grid gap-2" id="header-element-right">
          <button type="submit" class="btn btn-success">Salvar</button>
        </div>
      </div>
      <div class="col-md-2">
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-secondary" to="/veiculo-lista">Voltar
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
        <label class="form-label">Placa *</label>
        <input type="text" class="form-control" v-model="veiculo.placa" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Modelo *</label>
        <input type="text" class="form-control" v-model="veiculo.modelo" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Cor *</label>
        <input type="text" class="form-control" v-model="veiculo.cor" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Tipo *</label>
        <input type="text" class="form-control" v-model="veiculo.tipo" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Ano *</label>
        <input type="text" class="form-control" v-model="veiculo.ano" required>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { VeiculoModel } from '@/model/VeiculoModel';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "VeiculoFormulario",
  data() {
    return {
      veiculo: new VeiculoModel(),
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