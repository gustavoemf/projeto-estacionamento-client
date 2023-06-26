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
        <label class="form-label">Nome *</label>
        <input type="text" class="form-control remover-borda" v-model="condutor.nome" required>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label">CPF *</label>
        <input type="text" class="form-control remover-borda" v-model="condutor.cpf" required>
      </div>
    </div>
    <div class="row margin-10">
      <div class="col-md-6 text-start">
        <label class="form-label">Telefone *</label>
        <input type="tel" class="form-control remover-borda" pattern="[0-9]{2}\s?[0-9]{4,5}-?[0-9]{4}"
          v-model="condutor.telefone" required>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import { CondutorModel } from '@/model/CondutorModel';
import { defineComponent } from 'vue';
import FormHeaderComponent from '@/components/FormHeaderComponent.vue';
import CondutorClient from '@/client/CondutorClient';

export default defineComponent({
  name: "CondutorFormulario",
  components: {
    HeaderComponent,
    FormHeaderComponent
  },
  data() {
    return {
      condutor: new CondutorModel(),
      alert: {
        confirm: false as boolean,
        response: "" as string,
        message: "" as string,
        style: "" as string
      }
    };
  },
  methods: {
    handleCadastrar() {
      if (this.condutor.id) {
        CondutorClient.editar(this.condutor.id, this.condutor)
          .then(() => {
            this.$router.push({ name: 'condutor-lista-view' });
          })
          .catch((error) => {
            console.log(error.data);
          });
      } else {
        CondutorClient.cadastrar(this.condutor)
          .then((sucess) => {
            this.condutor = new CondutorModel();

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
      CondutorClient.findById(id)
        .then((condutor) => {
          this.condutor = condutor;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
});
</script>