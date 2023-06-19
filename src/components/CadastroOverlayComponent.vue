<template>
    <div class="overlay" id="primeiraDiv">
        <div class="wrapper">
            <h2>Cadastro de MOVIMENTAÇÃO</h2>
            <div class="content">
                <div class="container">
                    <form>
                        <label>Entrada:</label>
                        <input type="text" placeholder="Entrada">
                        <label>Condutor:</label>
                        <input type="text" placeholder="Condutor">
                        <label>Veículo:</label>
                        <input type="text" placeholder="Veículo">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CadastroOverlayComponent',
});
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>