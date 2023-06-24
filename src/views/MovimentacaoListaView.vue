<template>
    <HeaderComponent />
    <div class="container">
        <div class="row" id="header-lista">
            <div class="col-md-9 text-start" id="header-element-left">
                <p class="fs-3"> Lista de Movimentações </p>
            </div>
            <div class="col-md-2">
                <div class="d-grid gap-2" id="header-element-right">
                    <router-link type="button" class="btn btn-success" to="/movimentacao-formulario">Cadastrar</router-link>
                </div>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead class="table-secondary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Ativo</th>
                            <th scope="col" class="text-start">Condutor</th>
                            <th scope="col" class="text-start">Veiculo</th>
                            <th scope="col">Entrada</th>
                            <th scope="col">Saida</th>
                            <th scope="col">Multa</th>
                            <th scope="col">Total</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr v-for="item in movimentacoesLista" :key="item.id">
                            <th class="col-md-1">{{ item.id }}</th>
                            <th class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th class="text-start">{{ item.condutor }}</th>
                            <th class="text-start">{{ item.veiculo }}</th>
                            <th class="text-start">{{ item.entrada }}</th>
                            <th class="text-start">{{ item.saida }}</th>
                            <th class="text-start">{{ item.valorMulta }}</th>
                            <th class="text-start">{{ item.valorTotal }}</th>
                            <th class="col-md-2">
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <router-link type="button" class="btn btn-sm btn-warning"
                                        :to="{ name: 'marca-formulario-editar-view', query: { id: item.id, form: 'editar' } }">
                                        Editar
                                    </router-link>
                                    <router-link type="button" class="btn btn-sm btn-danger"
                                        :to="{ name: 'marca-formulario-excluir-view', query: { id: item.id, form: 'excluir' } }">
                                        Excluir
                                    </router-link>
                                </div>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { MovimentacaoModel } from '@/model/MovimentacaoModel';

export default defineComponent({
    name: 'MovimentacaoLista',
    components: {
        HeaderComponent
    },
    data() {
        return {
            movimentacoesLista: new Array<MovimentacaoModel>()
        }
    }
});
</script>

<style scoped lang="scss">
#header-lista {
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    margin: 0px auto;
    margin-top: 30px;
}
</style>