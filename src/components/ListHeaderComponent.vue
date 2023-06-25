<template>
    <div class="row" id="header-lista">
        <div class="col-md-9 text-start" id="header-element-left">
            <p class="fs-3">{{ headerName }}</p>
        </div>
        <div class="col-md-2">
            <div class="d-grid gap-2" id="header-element-right">
                <router-link type="button" class="btn btn-success" :to="cadastrarPath">Cadastrar</router-link>
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
                return `Lista de ${routeName.toUpperCase()}`;
            }
            return '';
        },
        cadastrarPath(): string {
            const currentRoute = this.$route.path;
            const dynamicParam = currentRoute.split('/')[1];

            return `/${dynamicParam}/formulario`;
        },
    },
});
</script>

<style scoped lang="scss">
#header-lista {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 80%;
    margin-top: 30px;
}
</style>
