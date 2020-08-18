import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "./css/main.less";
import Cookies from "vue-cookies";
import Anime from './animejs.install';
import "./resource.type";
import "material-icons/iconfont/material-icons.css";

Vue.use(Cookies);
Vue.use(Anime);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
