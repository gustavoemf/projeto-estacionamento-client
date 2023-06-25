<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Estacionamento</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Registros
                        </a>
                        <ul class="dropdown-menu bg-dark">
                            <li><router-link to="/movimentacao/lista" class="nav-link active">Movimentação</router-link></li>
                            <li><router-link to="/condutor/lista" class="nav-link active">Condutor</router-link></li>
                            <li><router-link to="/veiculo/lista" class="nav-link active">Veículo</router-link></li>
                            <li><router-link to="/modelo/lista" class="nav-link active">Modelo</router-link></li>
                            <li><router-link to="/marca/lista" class="nav-link active">Marca</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/configuracoes" class="nav-link active">Configurações</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "HeaderComponent",
});
</script>

<style scoped lang="scss"></style>
