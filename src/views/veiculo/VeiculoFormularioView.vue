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
        <select class="form-select" aria-label="Default select example" v-model="veiculo.modelo">
          <option :value="item" v-for="item in modeloList" :key="item.id">
            {{ item.nome }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label"> Cor *</label>
        <select class="form-select" aria-label="Default select example" v-model="veiculo.cor" required>
          <option :value="item" v-for="item in corList" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label"> Tipo *</label>
        <select class="form-select" aria-label="Default select example" v-model="veiculo.tipo" required>
          <option :value="item" v-for="item in tipoList" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
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
import { CorModel } from '@/model/enums/CorModel';
import { TipoModel } from '@/model/enums/TipoModel';
import ModeloClient from '@/client/ModeloClient';
import { ModeloModel } from '@/model/ModeloModel';

export default defineComponent({
  name: "VeiculoFormulario",
  components: {
    HeaderComponent,
    FormHeaderComponent
  },
  data() {
    return {
      veiculo: new VeiculoModel(),
      modeloList: [] as ModeloModel[],
      corList: [] as CorModel[],
      tipoList: [] as TipoModel[]
    };
  },
  mounted() {
    this.selectCorList();
    this.selectTipoList();
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
    selectModeloList() {
      ModeloClient.findAll()
        .then((response) => {
          this.modeloList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectCorList() {
      VeiculoClient.findCor()
        .then((response) => {
          this.corList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectTipoList() {
      VeiculoClient.findTipo()
        .then((response) => {
          this.tipoList = response;
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

.form-element {
  margin-top: 10px;

  select {
    width: 115px;
  }
}

.form-control,
.form-select {
  outline: none;
  box-shadow: none;
  border-color: #ced4da;
  margin-bottom: 10px;
}
</style>