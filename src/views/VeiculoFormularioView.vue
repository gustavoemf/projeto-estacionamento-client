<template>
  <HeaderComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
  name: 'VeiculoFormulario',
  components: {
    HeaderComponent
},
});
</script>