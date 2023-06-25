<template>
  <HeaderComponent />
  <FormHeaderComponent />
  <div class="container">
    <hr />
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label"> Condutor *</label>
        <select class="form-select" v-model="movimentacao.veiculo" aria-label="Default select example">
          <option :value="item" v-for="item in veiculoList" :key="item.id">
            {{ item.placa }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label"> Veículo *</label>
        <select class="form-select" v-model="movimentacao.condutor" aria-label="Default select example">
          <option :value="item" v-for="item in condutorList" :key="item.id">
            {{ item.nome }}
          </option>
        </select>
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
import { CondutorModel } from '@/model/CondutorModel';
import { VeiculoModel } from '@/model/VeiculoModel';
import CondutorClient from '@/client/CondutorClient';
import VeiculoClient from '@/client/VeiculoClient';

export default defineComponent({
  name: "MovimentacaoFormulario",
  components: { HeaderComponent, FormHeaderComponent },
  data() {
    return {
      movimentacao: new MovimentacaoModel(),
      condutorList: [] as CondutorModel[],
      veiculoList: [] as VeiculoModel[]
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
    selectCondutorList() {
      CondutorClient.findAll()
        .then((response) => {
          this.condutorList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectTipoList() {
      VeiculoClient.findAll()
        .then((response) => {
          this.veiculoList = response;
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

.form-control, .form-select {
  outline: none;
  box-shadow: none;
  border-color: #ced4da;
  margin-bottom: 10px;
}
</style>