import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";

import ConfiguracaoView from "../views/ConfiguracoesView.vue";

import MovimentacaoListaView from "@/views/movimentacao/MovimentacaoListaView.vue";
import MovimentacaoFormularioView from "@/views/movimentacao/MovimentacaoFormularioView.vue";

import CondutorListaView from "@/views/condutor/CondutorListaView.vue";
import CondutorFormularioView from "@/views/condutor/CondutorFormularioView.vue";

import VeiculoListaView from "@/views/veiculo/VeiculoListaView.vue";
import VeiculoFormularioView from "@/views/veiculo/VeiculoFormularioView.vue";

import ModeloListaView from "@/views/modelo/ModeloListaView.vue";
import ModeloFormularioView from "@/views/modelo/ModeloFormularioView.vue";

import MarcaListaView from "@/views/marca/MarcaListaView.vue";
import MarcaFormularioView from "@/views/marca/MarcaFormularioView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movimentacao/lista",
    name: "movimentacao-lista-view",
    component: MovimentacaoListaView,
  },
  {
    path: "/movimentacao/formulario",
    name: "movimentacao-formulario-view",
    component: MovimentacaoFormularioView,
    children: [
      {
        path: "/movimentacao/formulario",
        name: "movimentacao-formulario-editar-view",
        component: MovimentacaoFormularioView,
      },
      {
        path: "/movimentacao/formulario",
        name: "movimentacao-formulario-excluir-view",
        component: MovimentacaoFormularioView,
      },
    ],
  },
  {
    path: "/condutor/lista",
    name: "condutor-lista-view",
    component: CondutorListaView,
  },
  {
    path: "/condutor/formulario",
    name: "condutor-formulario-view",
    component: CondutorFormularioView,
    children: [
      {
        path: "/veiculo/formulario",
        name: "veiculo-formulario-editar-view",
        component: CondutorFormularioView,
      },
      {
        path: "/veiculo/formulario",
        name: "veiculo-formulario-excluir-view",
        component: CondutorFormularioView,
      },
    ],
  },
  {
    path: "/veiculo/lista",
    name: "veiculo-lista-view",
    component: VeiculoListaView,
  },
  {
    path: "/veiculo/formulario",
    name: "veiculo-formulario-view",
    component: VeiculoFormularioView,
    children: [
      {
        path: "/veiculo/formulario",
        name: "veiculo-formulario-editar-view",
        component: VeiculoFormularioView,
      },
      {
        path: "/veiculo/formulario",
        name: "veiculo-formulario-excluir-view",
        component: VeiculoFormularioView,
      },
    ],
  },
  {
    path: "/modelo/lista",
    name: "modelo-lista-view",
    component: ModeloListaView,
  },
  {
    path: "/modelo/formulario",
    name: "modelo-formulario-view",
    component: ModeloFormularioView,
    children: [
      {
        path: "/modelo/formulario",
        name: "modelo-formulario-editar-view",
        component: ModeloFormularioView,
      },
      {
        path: "/modelo/formulario",
        name: "modelo-formulario-excluir-view",
        component: ModeloFormularioView,
      },
    ],
  },
  {
    path: "/marca/lista",
    name: "marca-lista-view",
    component: MarcaListaView,
  },
  {
    path: "/marca/formulario",
    name: "marca-formulario-view",
    component: MarcaFormularioView,
    children: [
      {
        path: "/marca/formulario/:id",
        name: "marca-formulario-editar-view",
        component: MarcaFormularioView,
      },
      {
        path: "/marca/formulario",
        name: "marca-formulario-excluir-view",
        component: MarcaFormularioView,
      },
    ],
  },
  {
    path: "/configuracoes",
    name: "configuracoes",
    component: ConfiguracaoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
