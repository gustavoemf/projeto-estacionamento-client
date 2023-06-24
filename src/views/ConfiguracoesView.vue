<template>
  <HeaderComponent />
  <div class="row" id="header-lista">
    <div class="col-md-7 text-start" id="header-element-left">
      <p class="fs-2">Configurações</p>
    </div>
    <div class="col-md-2">
      <div class="d-grid gap-2" id="header-element-right">
        <button type="submit" class="btn btn-success">Salvar</button>
      </div>
    </div>
    <div class="col-md-2">
      <div class="d-grid gap-2">
        <router-link type="button" class="btn btn-secondary" to="/marca-lista">Voltar
        </router-link>
      </div>
    </div>
  </div>
  <hr />
  <div class="body-configuracao">
    <div class="form">
      <div class="form-valores">
        <div class="form-element">
          <label for="inputsValorHora" class="form-label">Valor Hora:</label>
          <input type="number" min="0" placeholder="Valor" id="inputsValorHora" class="form-control" />
        </div>
        <div class="form-element">
          <label for="inputValorMulta" class="form-label">Valor Multa:</label>
          <input type="number" min="0" placeholder="Valor" id="inputValorMulta" class="form-control" />
        </div>
      </div>
      <div class="form-expedientes">
        <div class="form-element">
          <label for="inputInicioExpediente" class="form-label">Início expediente:</label>
          <input type="time" id="inputInicioExpediente" class="form-control" />
        </div>
        <div class="form-element">
          <label for="inputFimExpediente" class="form-label">Fim expediente:</label>
          <input type="time" id="inputFimExpediente" class="form-control" />
        </div>
      </div>
      <div class="form-descontos">
        <div class="form-element">
          <label for="inputTempoParaDesconto" class="form-label">Tempo para desconto:</label>
          <input type="number" min="0" placeholder="Tempo" id="inputTempoParaDesconto" class="form-control" />
        </div>
        <div class="form-element">
          <label for="inputTempoGanhoDeDesconto" class="form-label">Tempo ganho de desconto:</label>
          <input type="number" min="0" placeholder="Tempo" id="inputTempoGanhoDeDesconto" class="form-control" />
        </div>
        <div class="form-element">
          <label for="inputGerarDesconto" class="form-label">Gerar desconto</label>
          <select id="inputGerarDesconto" class="form-select">
            <option selected>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>
      <div class="form-vagas">
        <div class="form-element">
          <label for="inputVagasCarro" class="form-label">Vagas carros:</label>
          <input type="number" min="0" placeholder="Quantidade" id="inputVagasCarro" class="form-control" />
        </div>
        <div class="form-element">
          <label for="inputVagasMoto" class="form-label">Vagas motos:</label>
          <input type="number" min="0" placeholder="Quantidade" id="inputVagasMoto" class="form-control" />
        </div>
        <div class="form-element">
          <label for="inputVagasVans" class="form-label">Vagas vans:</label>
          <input type="number" min="0" placeholder="Quantidade" id="inputVagasVans" class="form-control" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
  name: 'Configuracoes',
  components: {
    HeaderComponent
  },
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

.body-configuracao {
  .form {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    .form-valores,
    .form-expedientes,
    .form-descontos,
    .form-vagas {
      display: flex;
      flex-direction: row;
      margin-left: 30px;
    }

    .form-element {
      margin: 20px 20px;

      .form-select:focus {
        outline: none;
        box-shadow: none;
        border-color: #ced4da;
      }

      label {
        color: black;
      }

      input {
        outline: none;
        box-shadow: none;
        border-color: #ced4da;
      }

      input,
      select {
        border: 1px solid black;
        padding-left: 10px;
      }
    }
  }
}

hr {
  margin: auto;
  width: 90%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>