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

//定义全局过滤器（时间） moment插件
import moment from 'moment'
Vue.filter('dataFilter',function (dataStr,patten = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(patten)
});

// 引入mint-UI组件及样式
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入mui组件使用到的样式
import './lib/mui/js/mui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 注册mintUI组件
Vue.use(MintUi);
// 注册vue-photo-preview
Vue.use(preview);

//导入vue-photo-preview 缩略图组件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

Vue.config.productionTip = false;

// 进入页面显示在最顶部
// 全局后置钩子
Router.afterEach((to,from) => {
  window.scrollTo(0,0)
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:Router,
  store  // 挂载
});
