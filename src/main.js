import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Spanish from "./components/Spanish";
import English from "./components/English";
let num = Math.floor(Math.random() * 6) + 1;
import(`./assets/css/pillar-${num}.css`)

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/spanish', component: Spanish},
  { path: '/', component: English},
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
