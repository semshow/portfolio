import Vue from 'vue';
import App from './App.vue'
import router from './router/routes'

new Vue({
  el: "#app-root",
  router,
  render: h => h(App),
});