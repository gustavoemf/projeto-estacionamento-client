<template>
    <div class="row" id="header-lista">
        <div class="col-md-7 text-start" id="header-element-left">
            <p class="fs-3">{{ headerName }}</p>
        </div>
        <div class="col-md-2">
            <div class="d-grid gap-2" id="header-element-right">
                <button type="submit" class="btn btn-success" @click="onClickCadastrar">Salvar</button>
            </div>
        </div>
        <div class="col-md-2">
            <div class="d-grid gap-2">
                <button type="button" class="btn btn-secondary" @click="voltarPath">Voltar</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "ListHeaderComponent",
    computed: {
        headerName(): string {
            const fullRoute = useRouter().currentRoute.value.fullPath;
            const splitedRoute = fullRoute.split('/');
            const routeName = splitedRoute[1];
            if (routeName) {
                return `Cadastrar/Editar ${routeName.toUpperCase()}`;
            }
            return '';
        },
    },
    methods: {
        voltarPath() {
            this.$router.go(-1);
        },
        onClickCadastrar() {
            this.$emit('cadastrar');
        }
    }
});
</script>

<style scoped lang="scss">
#header-lista {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 80%;
    margin-top: 15px;
}
</style>
