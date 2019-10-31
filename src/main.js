import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import scroller from "@/components/scroller"
import loading from "@/components/loading"
Vue.component('scroller',scroller)
Vue.component('loading', loading)

Vue.config.productionTip = false



import Axios from 'axios'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';


// Vue.prototype.axios = axios;

// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

// 过滤器
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
