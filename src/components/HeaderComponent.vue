<template>
    <nav class="navbar navbar-expand-lg nav-justified" style="background-color: #adb5bd">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Estacionamento</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link active">Home</router-link>
                    <router-link to="/movimentacao-lista" class="nav-link active">Movimentação</router-link>
                    <router-link to="/condutor-lista" class="nav-link active">Condutor</router-link>
                    <router-link to="/veiculo-lista" class="nav-link active">Veículo</router-link>
                    <router-link to="/modelo-lista" class="nav-link active">Modelo</router-link>
                    <router-link to="/marca-lista" class="nav-link active">Marca</router-link>
                    <router-link to="/configuracoes" class="nav-link active">Configurações</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderComponent',
});
</script>

<style scoped lang="scss">
</style>
