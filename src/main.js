import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import VueResumable from './lib/index.js'

Vue.use(VueResumable)

new Vue({
  el: '#app',
  render: h => h(App)
})
