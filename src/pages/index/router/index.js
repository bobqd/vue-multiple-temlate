import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Index = r => require.ensure([], () => r(require('../views/index.vue')), 'chunkname1');

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
