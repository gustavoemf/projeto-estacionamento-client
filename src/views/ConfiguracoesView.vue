<template>
  <HeaderComponent />
  <ConfiguracaoComponent />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import ConfiguracaoComponent from '@/components/ConfiguracaoComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
  name: 'Configuracoes',
  components: {
    ConfiguracaoComponent,
    HeaderComponent
},
});
</script>
  