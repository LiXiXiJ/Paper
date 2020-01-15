import Vue from 'vue'
import Router from 'vue-router'
// 引入Tabbar 组件
import Home from '../components/Tabbar/Home'
import Member from '../components/Tabbar/Member'
import Shopcar from '../components/Tabbar/Shopcar'
import Search from '../components/Tabbar/Search'
//引入 lgge 组件
import Shop from '../components/lgge/shop'
import Share from '../components/lgge/share'
import Buy from '../components/lgge/buy'
import Comment from '../components/lgge/comment'
import Vip from '../components/lgge/vip'
import Touch from '../components/lgge/touch'

Vue.use(Router);

export default new Router({
  routes:[
    { path:'/home',component:Home },
    { path:'/member',component:Member },
    { path:'/shopcar',component:Shopcar },
    { path:'/search',component:Search },

    { path:'/home/shop',component:Shop },
    { path:'/home/share',component:Share },
    { path:'/home/buy',component:Buy },
    { path:'/home/comment',component:Comment },
    { path:'/home/vip',component:Vip },
    { path:'/home/touch',component:Touch },
  ],
  // 设置路由高亮，覆盖原来默认的类 router-link-active
  linkActiveClass:'mui-active'
})
