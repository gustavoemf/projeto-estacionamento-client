<template>
  <HeaderComponent />
  <FormHeaderComponent @cadastrar="handleCadastrar" />
  <div class="container">
    <hr />
    <div class="row margin-10">
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Valor hora</label>
        <input type="number" min="0" class="form-control remover-borda" placeholder="Valor"
          v-model="configuracao.valorHora" required>
      </div>
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Valor multa</label>
        <input type="number" min="0" class="form-control remover-borda" placeholder="Valor"
          v-model="configuracao.valorMinutoMulta" required>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Início expediente</label>
        <input type="time" class="form-control remover-borda" v-model="configuracao.inicioExpediente" required>
      </div>
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Fim expediente</label>
        <input type="time" class="form-control remover-borda" v-model="configuracao.fimExpediente" required>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-3 text-start form-element">
        <label class="form-label">Tempo para desconto</label>
        <input type="number" min="0" class="form-control remover-borda" placeholder="Tempo inteiro em horas"
          v-model="configuracao.tempoParaDesconto" required>
      </div>
      <div class="col-md-3 text-start form-element">
        <label class="form-label">Tempo ganho de desconto</label>
        <input type="number" min="0" class="form-control remover-borda" placeholder="Tempo inteiro em horas"
          v-model="configuracao.tempoGanhoDeDesconto" required>
      </div>
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Gerar desconto</label>
        <select class="form-select remover-borda select-formulario" v-model="configuracao.gerarDesconto">
          <option value="1" selected>Sim</option>
          <option value="2">Não</option>
        </select>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-1 text-start form-element select-formulario">
        <label class="form-label">Carros</label>
        <input type="number" min="0" class="form-control remover-borda" placeholder="Vagas"
          v-model="configuracao.vagasCarro" required>
      </div>
      <div class="col-md-1 text-start form-element select-formulario">
        <label class="form-label">Motos</label>
        <input type="number" min="0" class="form-control remover-borda" placeholder="Vagas"
          v-model="configuracao.vagasMoto" required>
      </div>
      <div class="col-md-1 text-start form-element select-formulario">
        <label class="form-label">Vans</label>
        <input type="number" min="0" class="form-control remover-borda" placeholder="Vagas"
          v-model="configuracao.vagasVan" required>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FormHeaderComponent from '@/components/FormHeaderComponent.vue';
import { ConfiguracaoModel } from '@/model/ConfiguracaoModel';
import ConfiguracaoClient from '@/client/ConfiguracaoClient';

export default defineComponent({
  name: 'Configuracoes',
  components: {
    HeaderComponent,
    FormHeaderComponent
  },
  data() {
    return {
      configuracao: new ConfiguracaoModel(),
      alert: {
        confirm: false as boolean,
        response: "" as string,
        message: "" as string,
        style: "" as string
      }
    };
  },
  mounted() {
    this.findById(this.configuracao.id);
  },
  methods: {
    findById(id: number) {
      ConfiguracaoClient.findById(id)
        .then(sucess => {
          this.configuracao = sucess
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleCadastrar() {
      if (this.configuracao.id) {
        ConfiguracaoClient.editar(this.configuracao.id, this.configuracao)
          .then(() => {
            this.$router.push({ name: 'configuracao-lista-view' });
          })
          .catch((error) => {
            console.log(error.data);
          });
      } else {
        ConfiguracaoClient.cadastrar(this.configuracao)
          .then((sucess) => {
            this.configuracao = new ConfiguracaoModel();

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
      ConfiguracaoClient.findById(id)
        .then((configuracao) => {
          this.configuracao = configuracao;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
);
</script>