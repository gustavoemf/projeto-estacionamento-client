<template>
    <HeaderComponent />
    <CadastroHeaderComponent />
  </template>
import CadastroHeaderComponent from '@/components/CadastroHeaderComponent.vue';
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import CadastroHeaderComponent from '@/components/CadastroHeaderComponent.vue';
  
  export default defineComponent({
    name: 'CadastroView',
    components: {
    HeaderComponent,
    CadastroHeaderComponent
},
  });
  </script>
  