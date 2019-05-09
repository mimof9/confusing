import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Foo from './components/Foo'
import Bar from './components/Bar'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
