import Vue from 'vue'
import routes from './router/index'
import App from './App'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

var router = new VueRouter({ routes })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),     
}).$mount('#app')
