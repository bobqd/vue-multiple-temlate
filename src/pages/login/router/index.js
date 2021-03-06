import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const Login = r => require.ensure([], () => r(require('../views/index.vue')), 'chunkname2');

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
