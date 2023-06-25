<template>
  <HeaderComponent />
  <FormHeaderComponent />
  <div class="container">
    <hr />
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Condutor *</label>
        <input type="text" class="form-control" placeholder="Insira o nome do condutor" v-model="movimentacao.condutor"
          required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Veículo *</label>
        <input type="text" class="form-control" placeholder="Insira a placa do veículo" v-model="movimentacao.veiculo"
          required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Entrada *</label>
        <input type="datetime-local" class="form-control" v-model="movimentacao.entrada" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Saída</label>
        <input type="datetime-local" class="form-control" v-model="movimentacao.saida" required>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { MovimentacaoModel } from '@/model/MovimentacaoModel';
import { defineComponent } from 'vue';
import FormHeaderComponent from '@/components/FormHeaderComponent.vue';
import MovimentacaoClient from '@/client/MovimentacaoClient';

export default defineComponent({
  name: "MovimentacaoFormulario",
  components: { HeaderComponent, FormHeaderComponent },
  data() {
    return {
      movimentacao: new MovimentacaoModel(),
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
      MovimentacaoClient.cadastrar(this.movimentacao)
        .then((sucess) => {
          this.movimentacao = new MovimentacaoModel();
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
.form-control {
  outline: none;
  box-shadow: none;
  border-color: #ced4da;
  margin-bottom: 10px;
}
</style>