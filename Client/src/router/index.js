import Vue from 'vue'
import Router from 'vue-router'
// 引入Tabbar 组件
import Home from '../components/Tabbar/Home'
import Member from '../components/Tabbar/Member'
import Shopcar from '../components/Tabbar/Shopcar'
import Search from '../components/Tabbar/Search'

Vue.use(Router);

export default new Router({
  routes:[
    { path:'/home',component:Home },
    { path:'/member',component:Member },
    { path:'/shopcar',component:Shopcar },
    { path:'/search',component:Search }
  ],
  // 设置路由高亮，覆盖原来默认的类 router-link-active
  linkActiveClass:'mui-active'
})
