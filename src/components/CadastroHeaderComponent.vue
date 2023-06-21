<template>
    <div id="header-cadastro">
        <select class="form-select">
            <option selected>Movimentação</option>
            <option value="1">Condutor</option>
            <option value="2">Veículo</option>
            <option value="3">Modelo</option>
            <option value="4">Marca</option>
        </select>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Digite aqui o que deseja pesquisar..."
                aria-label="Search">
            <button class="btn btn-secondary" type="submit">Buscar</button>
        </form>
        <div id="buttons-header-cadastro">
            <button type="button" class="btn btn-success" @click="abrirPopup">Novo</button>
            <CadastroOverlayComponent :showPopup="showPopup" :hidden="!showPopup" @closePopup="closePopup" />
        </div>
    </div>
    <table class="conteudo-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Ativo</th>
                <th>Entrada</th>
                <th>Condutor</th>
                <th>Veículo</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.id }}</td>
                <td>
                    <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                    <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                </td>
                <td>{{ item.entrada }}</td>
                <td>{{ item.condutor }}</td>
                <td>{{ item.veiculo }}</td>
                <td>
                    <button type="button" class="btn btn-warning">Editar</button>
                    <button type="button" class="btn btn-danger">Excluir</button>
                </td>
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
            showPopup: false,
            items: [
                { id: 1, ativo: true, entrada: '00:00:00', condutor: 'Gustavo', veiculo: 'ABC1D23' },
                { id: 2, ativo: false, entrada: '00:00:00', condutor: 'Gustavo', veiculo: 'ABC1D23' }
            ]
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

        input {
            padding-left: 10px;
        }

        button {
            margin: 0;
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
        color: black;
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

    tbody td span {
        padding: 3px;
    }

    button {
        padding: 2px;
        margin: 2px;
        color: rgba(0, 0, 0, 0.9);
        font-weight: 500;
    }

    button:last-child {
        margin-right: 0;
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