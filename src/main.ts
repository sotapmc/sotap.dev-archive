import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "./css/main.less";
import Cookies from "vue-cookies";
import Anime from './animejs.install';

Vue.use(Cookies);
Vue.use(Anime);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
