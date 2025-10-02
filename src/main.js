import Vue from 'vue'
import App from './App.vue'
import './assets/styles/global.css'
import './assets/tailwind.css'
import router from './router/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
