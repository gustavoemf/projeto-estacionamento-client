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
  <FormHeaderComponent @cadastrar="handleCadastrar" />
  <div class="container">
    <hr />
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label">Placa *</label>
        <input type="text" class="form-control remover-borda" placeholder="Insira a placa do veículo"
          v-model="veiculo.placa" required>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label">Modelo *</label>
        <select class="form-select remover-borda" v-model="veiculo.modelo" required>
          <option :value="item" v-for="item in modeloList" :key="item.id">
            {{ item.nome }}
          </option>
        </select>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label">Cor *</label>
        <select class="form-select remover-borda" v-model="veiculo.cor" required>
          <option :value="item" v-for="item in corList" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label">Tipo *</label>
        <select class="form-select remover-borda" v-model="veiculo.tipo" required>
          <option :value="item" v-for="item in tipoList" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label">Ano *</label>
        <input type="number" min="0" class="form-control remover-borda" placeholder="Insira o ano do veículo"
          v-model="veiculo.ano" required>
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
      tipoList: [] as TipoModel[],
      alert: {
        confirm: false as boolean,
        response: "" as string,
        message: "" as string,
        style: "" as string
      }
    };
  },
  mounted() {
    this.selectModeloList();
    this.selectCorList();
    this.selectTipoList();
  },
  methods: {
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
    handleCadastrar() {
      if (this.veiculo.id) {
        VeiculoClient.editar(this.veiculo.id, this.veiculo)
          .then(() => {
            this.$router.push({ name: 'veiculo-lista-view' });
          })
          .catch((error) => {
            console.log(error.data);
          });
      } else {
        VeiculoClient.cadastrar(this.veiculo)
          .then((sucess) => {
            this.veiculo = new VeiculoModel();

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
      VeiculoClient.findById(id)
        .then((veiculo) => {
          this.veiculo = veiculo;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
});
</script>