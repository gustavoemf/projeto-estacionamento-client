<template>
  <HeaderComponent />
  <CadastroHeaderComponent />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import CadastroHeaderComponent from '@/components/CadastroHeaderComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
  name: 'MovimentacaLista',
  components: {
    CadastroHeaderComponent,
    HeaderComponent
},
});
</script>
  