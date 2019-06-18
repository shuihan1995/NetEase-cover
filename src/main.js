import Vue from 'vue'
import App from './App.vue'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import Split from './components/Split/Split.vue'
import router from './router'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

Vue.component('FooterGuide', FooterGuide)
Vue.component('Split', Split)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router // 配置路由器
  // store   // 配置vuex的store
})
