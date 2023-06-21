import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrosView from '../views/RegistrosView.vue'
import ConfiguracoesView from '../views/ConfiguracoesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registros',
    name: 'registros',
    component: RegistrosView
  },
  {
    path: '/configuracoes',
    name: 'configuracoes',
    component: ConfiguracoesView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
