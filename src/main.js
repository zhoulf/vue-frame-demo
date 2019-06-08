import Vue from 'vue'
import routes from './router/index'
import App from './App'
import VueRouter from 'vue-router'
import store from './store/'


import Button from "ant-design-vue/lib/button"
import DatePicker from "ant-design-vue/lib/date-picker"


import "ant-design-vue/dist/antd.css";

Vue.use(VueRouter)

var router = new VueRouter({ routes })

Vue.component(Button.name, Button)
Vue.component(DatePicker.name, DatePicker)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),     
}).$mount('#app')
