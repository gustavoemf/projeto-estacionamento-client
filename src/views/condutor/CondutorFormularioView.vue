<template>
  <HeaderComponent />
  <FormHeaderComponent />
  <div class="container">
    <hr />
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Nome *</label>
        <input type="text" class="form-control" v-model="condutor.nome" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">CPF *</label>
        <input type="text" class="form-control" v-model="condutor.cpf" required>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 text-start">
        <label class="form-label">Telefone *</label>
        <input type="tel" class="form-control" pattern="[0-9]{2}\s?[0-9]{4,5}-?[0-9]{4}" v-model="condutor.telefone"
          required>
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
      condutor: new CondutorModel()
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
      CondutorClient.cadastrar(this.condutor)
        .then((sucess) => {
          this.condutor = new CondutorModel();
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
.row {
  margin-top: 10px;
}

.form-control {
  outline: none;
  box-shadow: none;
  border-color: #ced4da;
}
</style>