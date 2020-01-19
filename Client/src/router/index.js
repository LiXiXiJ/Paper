import Vue from 'vue'
import Router from 'vue-router'
// 引入Tabbar 组件
import Home from '../components/Tabbar/Home'
import Member from '../components/Tabbar/Member'
import Shopcar from '../components/Tabbar/Shopcar'
import Mine from '../components/Tabbar/Mine'
//引入 lgge 组件
import Talk from '../components/lgge/talk'
import Share from '../components/lgge/share'
import Buy from '../components/lgge/buy'
import Comment from '../components/lgge/comment'
import Vip from '../components/lgge/vip'
import Touch from '../components/lgge/touch'

//引入Mine组件
import register from '../components/Mine/register'
import login from '../components/Mine/login'
import About from '../components/Mine/About'
import Current from '../components/Mine/Current'
import News from '../components/Mine/News'
import Privacy from '../components/Mine/Privacy'
import Trouble from '../components/Mine/Trouble'

Vue.use(Router);

export default new Router({
  routes:[
    { path:'/home',component:Home },
    { path:'/member',component:Member },
    { path:'/shopcar',component:Shopcar },
    { path:'/mine',component:Mine },

    { path:'/home/talk',component:Talk },
    { path:'/home/share',component:Share },
    { path:'/home/buy',component:Buy },
    { path:'/home/comment',component:Comment },
    { path:'/home/vip',component:Vip },
    { path:'/home/touch',component:Touch },

    { path:'/mine/register',component:register },
    { path:'/mine/login',component:login },
    { path:'/mine/about',component:About },
    { path:'/mine/current',component:Current},
    { path:'/mine/news',component:News },
    { path:'/mine/privacy',component:Privacy },
    { path:'/mine/trouble',component:Trouble }
  ],
  // 设置路由高亮，覆盖原来默认的类 router-link-active
  linkActiveClass:'mui-active'
})
