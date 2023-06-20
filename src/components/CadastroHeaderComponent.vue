<template>
    <div id="header-cadastro">
        <select name="elemento" id="elemento-header-cadastro" placeholder="Elemento"></select>
        <input id="barra-pesquisa" type="text" placeholder="Digite aqui o que deseja pesquisar..." />
        <div id="buttons-header-cadastro">
            <button type="button" class="btn btn-success" @click="abrirPopup">Novo</button>
            <CadastroOverlayComponent :showPopup="showPopup" :hidden="!showPopup" @closePopup="closePopup" />
            <button type="button" class="btn btn-danger">Editar</button>
            <button type="button" class="btn btn-warning">Excluir</button>
        </div>
    </div>
    <table class="conteudo-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Entrada</th>
                <th>Condutor</th>
                <th>Veículo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>00:00:00</td>
                <td>Gustavo</td>
                <td>ABC1D23</td>
            </tr>
            <tr>
                <td>2</td>
                <td>00:00:00</td>
                <td>Gustavo</td>
                <td>ABC1D23</td>
            </tr>
        </tbody>
    </table>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import CadastroOverlayComponent from './CadastroOverlayComponent.vue';

export default defineComponent({
    name: "CadastroHeaderComponent",
    components: {
        CadastroOverlayComponent
    },
    data() {
        return {
            showPopup: false
        };
    },
    methods: {
        abrirPopup() {
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
        }
    }
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

    button {
        display: flex;
        margin-left: 15px;
        margin-top: 50px;
        width: 100px;
        height: 40px;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: black;
        font-weight: bold;
    }
}

#elemento-header-cadastro {
    margin-top: 50px;
    min-width: fit-content;
    width: 200px;
    height: 40px;
    min-height: fit-content;
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

.conteudo-table {
    border-collapse: collapse;
    margin: 25px auto;
    font-size: 0.9em;
    width: 80vw;
    min-width: 400px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);

    thead tr {
        text-align: center;
        font-weight: bold;
        background-color: #D9D9D9;
    }

    thead td {
        padding: 12px 15px;
    }

    tbody tr {
        border-bottom: 1px #dddddd solid;
    }

    tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    tbody tr:last-of-type {
        border-bottom: 1px solid black;
    }
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