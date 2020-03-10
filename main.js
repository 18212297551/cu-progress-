import Vue from 'vue'
import App from './App'
import cuProgress from './components/cu-progress/cu-progress.vue'
Vue.config.productionTip = false
Vue.component('cu-progress',cuProgress)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
