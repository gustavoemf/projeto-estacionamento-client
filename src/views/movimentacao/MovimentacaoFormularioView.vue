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
        <label class="form-label"> Condutor *</label>
        <select class="form-select remover-borda" v-model="movimentacao.veiculo" required>
          <option :value="item" v-for="item in veiculoList" :key="item.id">
            {{ item.placa }}
          </option>
        </select>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label"> Veículo *</label>
        <select class="form-select remover-borda" v-model="movimentacao.condutor" required>
          <option :value="item" v-for="item in condutorList" :key="item.id">
            {{ item.nome }}
          </option>
        </select>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label">Entrada *</label>
        <input type="datetime-local" class="form-control remover-borda" v-model="movimentacao.entrada" required>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label">Saída</label>
        <input type="datetime-local" class="form-control remover-borda" v-model="movimentacao.saida">
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
      veiculoList: [] as VeiculoModel[],
      alert: {
        confirm: false as boolean,
        response: "" as string,
        message: "" as string,
        style: "" as string
      }
    };
  },
  mounted() {
    this.selectCondutorList();
    this.selectVeiculoList();
  },
  methods: {
    selectCondutorList() {
      CondutorClient.findAll()
        .then((response) => {
          this.condutorList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectVeiculoList() {
      VeiculoClient.findAll()
        .then((response) => {
          this.veiculoList = response;
        })
        .catch((error) => {
          console.log(error);
        });
    }, handleCadastrar() {
      if (this.movimentacao.id) {
        MovimentacaoClient.editar(this.movimentacao.id, this.movimentacao)
          .then(() => {
            this.$router.push({ name: 'movimentacao-lista-view' });
          })
          .catch((error) => {
            console.log(error.data);
          });
      } else {
        MovimentacaoClient.cadastrar(this.movimentacao)
          .then((sucess) => {
            this.movimentacao = new MovimentacaoModel();

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
      MovimentacaoClient.findById(id)
        .then((movimentacao) => {
          this.movimentacao = movimentacao;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
});
</script>