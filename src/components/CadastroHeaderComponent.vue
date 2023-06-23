<template>
    <div id="header-cadastro">
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Digite aqui o que deseja pesquisar..."
                aria-label="Search">
            <button class="btn btn-secondary" type="submit">Buscar</button>
        </form>
        <div id="buttons-header-cadastro">
            <button type="button" class="btn btn-success">Novo</button>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CadastroHeaderComponent"
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
    justify-content: center;
    padding-bottom: 15px;
    margin: 0px 30px;
    border-bottom: 1px black solid;

    select {
        padding-left: 10px;
        margin-top: 50px;
        min-width: fit-content;
        width: 200px;
        height: 40px;
        min-height: fit-content;
    }

    form {
        margin-left: 10px;
        margin-top: 50px;
        min-width: fit-content;
        width: 500px;
        height: 40px;
        min-height: fit-content;

        input, button {
            border-radius: 0;
        }

        input {
            padding-left: 10px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border: 1px solid black;
        }

        button {
            margin: 0;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            margin-left: -9px;
            color: white;
        }
    }

    button {
        display: flex;
        margin-left: 15px;
        margin-top: 50px;
        width: 100px;
        height: 40px;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
    }
}

#barra-pesquisa {
    padding-left: 10px;
    margin-left: 15px;
    margin-top: 50px;
    min-width: fit-content;
    width: 450px;
    height: 40px;
    min-height: fit-content;
}

#buttons-header-cadastro {
    display: flex;
    justify-content: center;
}

.form-control:focus {
    outline: none;
    box-shadow: none;
    border-color: #ced4da;
}

@media only screen and (max-width: 900px) {
    #header-cadastro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>