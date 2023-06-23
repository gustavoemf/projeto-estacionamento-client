import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movimentacao-lista',
    name: 'movimentacao-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovimentacaoListaView.vue')
  },
  {
    path: '/movimentacao-formulario',
    name: 'movimentacao-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovimentacaoFormularioView.vue')
  },
  {
    path: '/condutor-lista',
    name: 'condutor-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/CondutorListaView.vue')
  },
  {
    path: '/condutor-formulario',
    name: 'condutor-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/CondutorFormularioView.vue')
  },
  {
    path: '/veiculo-lista',
    name: 'veiculo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/VeiculoListaView.vue')
  },
  {
    path: '/veiculo-formulario',
    name: 'veiculo-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/VeiculoFormularioView.vue')
  },
  {
    path: '/modelo-lista',
    name: 'modelo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModeloListaView.vue')
  },
  {
    path: '/modelo-formulario',
    name: 'modelo-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModeloFormularioView.vue')
  },
  {
    path: '/marca-lista',
    name: 'marca-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/MarcaListaView.vue')
  },
  {
    path: '/marca-formulario',
    name: 'marca-formulario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/MarcaFormularioView.vue')
  },
  {
    path: '/configuracoes',
    name: 'configuracoes',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConfiguracoesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
