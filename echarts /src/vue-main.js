import Vue from 'vue'
import VueApp from './vue-app'
console.log('hi')
new Vue({
  render: h => h(VueApp)
}).$mount(elementOrSelector.document.getElementById('root'))