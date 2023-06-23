<template>
  <HeaderComponent />
  <CadastroHeaderComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import CadastroHeaderComponent from '@/components/CadastroHeaderComponent.vue';

export default defineComponent({
  name: 'VeiculoLista',
  components: {
    CadastroHeaderComponent,
    HeaderComponent
},
});
</script>