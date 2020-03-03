import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Login from '../components/Log&Reg/Login'

// 商品管理
import ShopLists from '../components/ShopSetting/ShopList/ShopLists'
import YouHaoHuos from '../components/ShopSetting/YouHaoHuo/YouHaoHuos'
import AiGuangJies from '../components/ShopSetting/AiGuangJie/AiGuangJies'
import CaiNiLikes from '../components/ShopSetting/CaiNiLike/CaiNiLikes'
import CreateShops from '../components/ShopSetting/CreateShop/CreateShops'

// 订单管理
import WaitFaHuo from '../components/OrderSetting/WaitFaHuo/WaitFaHuo'
import YiFaHuo from '../components/OrderSetting/YiFaHuo/YiFaHuo'
import Payment from '../components/OrderSetting/Payment/Payment'
import FaHuo from '../components/OrderSetting/WaitFaHuo/FaHuo'

// 财务统计
import AffairsCount from '../components/AffairsCount/AffairsCount'

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    // 重定向，一进去就展示 home 组件
    { path:'/',redirect: '/home'},
    { path:'/home/login',component:Login },

    {
      path:'/home',
      component:Home,
      children:[

        { path:'/shop/shoplist',component:ShopLists },
        { path:'/shop/youhaohuo',component:YouHaoHuos },
        { path:'/shop/aiguangjie',component:AiGuangJies },
        { path:'/shop/cainilike',component:CaiNiLikes },
        { path:'/shop/createshop',component:CreateShops },

        { path:'/order/waitfahuo',component:WaitFaHuo },
        { path:'/order/yifahuo',component:YiFaHuo },
        { path:'/order/payment',component:Payment },
        { path:'/order/fahuo',component:FaHuo },

        { path:'/affairs/allcount',component:AffairsCount}
      ]
    }
  ]
})
