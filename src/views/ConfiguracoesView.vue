<template>
  <HeaderComponent />
  <FormHeaderComponent />
  <div class="container">
    <hr />
    <div class="row">
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Valor hora</label>
        <input type="number" min="0" class="form-control" placeholder="Valor" v-model="configuracao.valorHora" required>
      </div>
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Valor multa</label>
        <input type="number" min="0" class="form-control" placeholder="Valor" v-model="configuracao.valorMinutoMulta"
          required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Início expediente</label>
        <input type="time" class="form-control" v-model="configuracao.inicioExpediente" required>
      </div>
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Fim expediente</label>
        <input type="time" class="form-control" v-model="configuracao.fimExpediente" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 text-start form-element">
        <label class="form-label">Tempo para desconto</label>
        <input type="number" min="0" class="form-control" placeholder="Tempo inteiro em horas"
          v-model="configuracao.tempoParaDesconto" required>
      </div>
      <div class="col-md-3 text-start form-element">
        <label class="form-label">Tempo ganho de desconto</label>
        <input type="number" min="0" class="form-control" placeholder="Tempo inteiro em horas"
          v-model="configuracao.tempoGanhoDeDesconto" required>
      </div>
      <div class="col-md-2 text-start form-element">
        <label class="form-label">Gerar desconto</label>
        <select class="form-select" v-model="configuracao.gerarDesconto">
          <option value="1" selected>Sim</option>
          <option value="2">Não</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1 text-start form-element">
        <label class="form-label">Carros</label>
        <input type="number" min="0" class="form-control" placeholder="Vagas" v-model="configuracao.vagasCarro" required>
      </div>
      <div class="col-md-1 text-start form-element">
        <label class="form-label">Motos</label>
        <input type="number" min="0" class="form-control" placeholder="Vagas" v-model="configuracao.vagasMoto" required>
      </div>
      <div class="col-md-1 text-start form-element">
        <label class="form-label">Vans</label>
        <input type="number" min="0" class="form-control" placeholder="Vagas" v-model="configuracao.vagasVan" required>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FormHeaderComponent from '@/components/FormHeaderComponent.vue';
import { ConfiguracaoModel } from '@/model/ConfiguracaoModel';

export default defineComponent({
  name: 'Configuracoes',
  components: {
    HeaderComponent,
    FormHeaderComponent
  },
  data() {
    return {
      configuracao: new ConfiguracaoModel()
    };
  },
});
</script>
  
<style scoped lang="scss">
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
}
</style>