// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import axios from 'axios'
import store from './store'

//配置axios
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api';

Vue.config.productionTip = false;

// 定义全局过滤器
import moment from 'moment'
Vue.filter('dateFilter',function (dateStr,patten = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(patten)
});

//引入element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:Router,
  store,
  components: { App },
  template: '<App/>'
});
