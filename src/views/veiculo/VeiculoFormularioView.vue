<template>
  <HeaderComponent />
  <FormHeaderComponent />
  <div class="container">
    <hr />
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Placa *</label>
        <input type="text" class="form-control" placeholder="Insira a placa do veículo" v-model="veiculo.placa" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Modelo *</label>
        <input type="text" class="form-control" placeholder="Insira o modelo do veículo" v-model="veiculo.modelo"
          required>
      </div>
    </div>
    <div class="row">
      <label class="form-label text-start">Cor *</label>
      <select class="form-select" aria-label="Default select example" v-model="veiculo.cor" required>
        <option value="1" selected>BRANCO</option>
        <option value="2">PRATA</option>
        <option value="3">PRETO</option>
        <option value="4">CINZA</option>
        <option value="5">VERMELHO</option>
        <option value="6">AZUL</option>
        <option value="6">BEGE</option>
        <option value="6">VERDE</option>
      </select>
    </div>
    <div class="row">
      <label class="form-label text-start">Tipo *</label>
      <select class="form-select" aria-label="Default select example" v-model="veiculo.tipo" required>
        <option value="1" selected>CARRO</option>
        <option value="2">MOTO</option>
        <option value="3">VAN</option>
      </select>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Ano *</label>
        <input type="number" min="0" class="form-control" placeholder="Insira o ano do veículo" v-model="veiculo.ano"
          required>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { VeiculoModel } from '@/model/VeiculoModel';
import { defineComponent } from 'vue';
import FormHeaderComponent from '@/components/FormHeaderComponent.vue';
import VeiculoClient from '@/client/VeiculoClient';

export default defineComponent({
  name: "VeiculoFormulario",
  components: {
    HeaderComponent,
    FormHeaderComponent
  },
  data() {
    return {
      veiculo: new VeiculoModel()
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
      VeiculoClient.cadastrar(this.veiculo)
        .then((sucess) => {
          this.veiculo = new VeiculoModel();
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
.form-control,
.form-select {
  outline: none;
  box-shadow: none;
  border-color: #ced4da;
  margin-bottom: 10px;
}

select {
  margin-left: 12px;
  width: 48%;
}
</style>