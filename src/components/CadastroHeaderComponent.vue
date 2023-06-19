<template>
    <div id="header-cadastro">
        <select name="elemento" id="elemento-header-cadastro" placeholder="Elemento"></select>
        <input id="barra-pesquisa" type="text" placeholder="Digite aqui o que deseja pesquisar...">
        <button type="button" class="btn btn-success">Novo</button>
        <button type="button" class="btn btn-warning">Editar</button>
        <button type="button" class="btn btn-danger">Excluir</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CadastroHeaderComponent',
});
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#header-cadastro {
    display: flex;
    justify-items: flex-start;
    padding-bottom: 2vh;
    margin: 0px 30px;
    border-bottom: 1px black solid;
    button {
        margin-left: 1vw;
        margin-top: 4vw;
        width: 10vw;
        height: 5vh;
        min-height: 35px;
        justify-content: center;
        align-items: center;
        color: black;
        font-weight: bold;
    }
}

#elemento-header-cadastro {
    margin-left: 2vw;
    margin-top: 4vw;
    min-width: fit-content;
    width: 15vw;
    height: 5vh;
    min-height: 35px;
}

#barra-pesquisa {
    padding-left: 10px;
    margin-left: 1vw;
    margin-top: 4vw;
    min-width: fit-content;
    width: 35vw;
    height: 5vh;
    min-height: 35px;
}
</style>