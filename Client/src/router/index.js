import Vue from 'vue'
import Router from 'vue-router'

// 引入Tabbar 组件
import Home from '../components/Tabbar/Home'
import Search from '../components/Tabbar/Search'
import ShopCar from '../components/Tabbar/Shopcar'
import Mine from '../components/Tabbar/Mine'

//引入 lgge 组件
import ShopList from '../components/lgge/shoplist'
import PhotoList from '../components/lgge/photolist'
import NewsList from '../components/lgge/newslist'
import WeiWeiTao from '../components/lgge/weiweitao'
import MaiJiaXiu from '../components/lgge/maijiaxiu'
import ShouCangJia from '../components/lgge/shoucangjia'

// 引入 lgge-info 组件
import PhotoInfo from '../components/lgge/lgge-info/photoinfo'
import ShopInfo from '../components/lgge/lgge-info/shopinfo'
import ShopDescription from '../components/lgge/lgge-info/shopdescription'
import ShopComment from '../components/lgge/lgge-info/shopcomment'

// 引入 Home 组件
import YouHaoHuo from '../components/Home/YouHaoHuo'
import buyYouHaoHuoShop from '../components/Home/PublicCom/buyYouHaoHuoShop'
import buyYouHaoHuoInfoShop from '../components/Home/PublicCom/buyYouHaoHuoInfoShop'
import AiGuangJie from '../components/Home/AiGuangJie'
import buyAiGuangJieInfoShop from '../components/Home/PublicCom/buyAiGuangJieInfoShop'
import CaiNiLike from '../components/Home/CaiNiLike(buyCaiNiLikeShop)'

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
    // 路由重定向，让程序一进去就展示对应的组件，
    //    这里的 redirect 和 node 中的 redirect 完全是两码事
    { path:'/',redirect: '/home'},

    { path:'/home',component:Home },
    { path:'/search',component:Search },
    { path:'/shopcar',component:ShopCar },
    { path:'/mine',component:Mine },

    { path:'/home/shoplist',component:ShopList },
    { path:'/home/photolist',component:PhotoList },
    { path:'/home/newslist',component:NewsList },
    { path:'/home/weiweitao',component:WeiWeiTao },
    { path:'/home/maijiaxiu',component:MaiJiaXiu },
    { path:'/home/shoucangjia',component:ShouCangJia },


    { path:'/home/photoinfo/:id',component:PhotoInfo },
    { path:'/home/shopinfo/:id',component:ShopInfo },
    { path:'/home/shopdescription/:id',component:ShopDescription},
    { path:'/home/shopcomment',component:ShopComment },

    { path:'/home/youhaohuo/:id',component:YouHaoHuo },
    { path:'/home/buyyouhaohuoshop/:id',component:buyYouHaoHuoShop},
    { path:'/home/buyyouhaohuoinfoshop/:id',component:buyYouHaoHuoInfoShop},
    { path:'/home/aiguangjie',component:AiGuangJie},
    { path:'/home/buyaiguangjieinfoshop/:id',component:buyAiGuangJieInfoShop},
    { path:'/home/cainilike/:id',component:CaiNiLike},

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
