<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #adb5bd">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Estacionamento</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-link active">Home</router-link>
                    <router-link to="/registros" class="nav-link active">Registros</router-link>
                    <router-link to="#" class="nav-link active">Sobre</router-link>
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
