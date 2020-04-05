import Vue from 'vue'
import App from './App'
import store from './store'
import util from './util'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn'

Vue.use(util)

App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
