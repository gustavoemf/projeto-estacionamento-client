<template>
    <HeaderComponent />
    <ConfiguracaoComponent />
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import ConfiguracaoComponent from '@/components/ConfiguracaoComponent.vue';
  
  export default defineComponent({
    name: 'ConfiguracoesView',
    components: {
    HeaderComponent,
    ConfiguracaoComponent
},
  });
  </script>
  