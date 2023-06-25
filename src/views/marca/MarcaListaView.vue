<template>
    <HeaderComponent />
    <ListHeaderComponent />
    <div class="container">
        <hr />
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead class="table-secondary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Ativo</th>
                            <th scope="col" class="text-start">Nome</th>
                            <th scope="col">Opção</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">

                        <tr v-for="item in marcasList" :key="item.id">
                            <th class="col-md-1">{{ item.id }}</th>
                            <th class="col-md-2">
                                <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                                <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                            </th>
                            <th class="text-start">{{ item.nome }}</th>
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
import { MarcaModel } from '@/model/MarcaModel'
import ListHeaderComponent from '@/components/ListHeaderComponent.vue';

export default defineComponent({
    name: 'MarcaLista',
    components: {
        HeaderComponent,
        ListHeaderComponent
    },
    data() {
        return {
            marcasList: new Array<MarcaModel>()
        }
    }
});
</script>