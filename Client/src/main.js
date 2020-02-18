// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import axios from 'axios'
import Vuex from 'vuex'

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

// 导入mui组件使用到的样式
import './lib/mui/js/mui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入vue-photo-preview
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

Vue.config.productionTip = false;

// 进入页面显示在最顶部
// 全局后置钩子
Router.afterEach((to,from,next) => {
  window.scrollTo(0,0)
});

// 引用mintUI组件
Vue.use(MintUi);
// 引用vue-photo-preview
Vue.use(preview);

// 配置 vuex
Vue.use(Vuex);

// 每次刚进入网站，肯定会调用 main.js 在刚调用的时候，先从本地存储中把购物车的数据读出来，放到store中
const shopCarItem = JSON.parse(localStorage.getItem('shopCar') || '[]');

const store = new Vuex.Store({
  state:{ //this.$store.state.***
    shopCar: shopCarItem
      // 购物车中的商品的数据，用一个数组存储，存储一些商品的对象
      // {id:商品id,count:要购买的数量,price:商品价格,selected:true/false}
  },
  mutations:{ //this.$store.commit('方法名'，参数)
    //点击加入购物车，把选中的商品信息保存到state中的 shopCar
    selectShopAddToShopCar(state,selectShop){

      // 分析：1.如果购物车中，之前就已经有了这个对应的商品，那么只需要更新数量
      //       2.如果没有，直接把商品push到 shopCar

      // 假设在购物车中没有找到对应的商品
      var flag = false; // 标识符

      state.shopCar.some(item => {
        if (item.id === selectShop.id) {
          item.count += parseInt(selectShop.count);
          flag = true;
          return true
        }
      });
      // 如果最终循环完毕，得到 flag 还是false，则把商品数据直接push到购物车中
      if (!flag) {
        state.shopCar.push(selectShop)
      }
    //  当更新 shopCar 之后，把数据存储到本地的localStorage中
      localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    },

    // shopcar页面修改商品数量值
    updateShopCarCount(state,selectShop) {
      state.shopCar.some(item => {
        if (item.id == selectShop.id) {  //  item.id 类型为Number，selectShop.id 类型为string
          item.count = parseInt(selectShop.count);
          return true
        }
      });
      // 当修改完商品的数量，把最新的数量保存到本地存储中
      localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    },

  //  根据id从store中的购物车中删除对应的数据
    removeFromShopCar(state,id) {
      state.shopCar.some((item,i) => {
        if (item.id == id) {
          state.shopCar.splice(i,1);
          return true
        }
      });
      localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    },
    // 改变商品选中
    updateShopCarSelected(state,switchInfo) {
      state.shopCar.some(item => {
        if (item.id == switchInfo.id) {
          item.selected = switchInfo.selected
        }
      });
      localStorage.setItem('shopCar',JSON.stringify(state.shopCar))
    }

  },
  // 相当于计算属性
  getters:{ //this.store.getters.***
    getAllSelectShopCount(state){
      var allCount = 0;
      state.shopCar.forEach(item => {
        allCount += item.count
      });
      return allCount
    },
    getShopCarSelectCount(state){
      var shopCarCount = {};
      state.shopCar.forEach(item => {
        // 商品的id作为键，数量作为值
        shopCarCount[item.id] = item.count
      });
      return shopCarCount
    },
    getShopCarSelected(state) {
      var Obj = {};
      state.shopCar.forEach(item => {
        Obj[item.id] = item.selected
      });
      return Obj
    },
    // 得到总价和总量
    getShopCarAllPrice(state) {
      var Obj = {
        COUNT:0,  // 勾选的数量
        PRICE:0   // 勾选的总价
      };
      state.shopCar.forEach(item => {
        if (item.selected) {
          Obj.COUNT += item.count;
          Obj.PRICE += item.price * item.count
        }
      });
      return Obj
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:Router,
  store  // 挂载
});
