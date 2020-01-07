// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
// 引入mint-UI组件及样式
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

// 导入mui组件使用到的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false;

// 引用mintUI组件
Vue.use(MintUi);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:Router
});
