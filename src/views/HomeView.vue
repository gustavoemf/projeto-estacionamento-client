<template>
  <HeaderComponent />
  <CadastroOverlayComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import CadastroOverlayComponent from '@/components/CadastroOverlayComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    CadastroOverlayComponent
},
});
</script>
