// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.filter('date', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
})

// Vue.prototype.$serverUrl = 'http://127.0.0.1:8000/'  // local server

Vue.prototype.$serverUrl = 'https://kev-backend.herokuapp.com/'   // production server

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
