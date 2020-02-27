import Vue from 'vue'
import Router from 'vue-router'

// 解决路由跳转报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

// 引入Tabbar 组件
import Home from '../components/Tabbar/Home'
import Search from '../components/Tabbar/Search'
import ShopCar from '../components/Tabbar/shopCar/Shopcar'
import Mine from '../components/Tabbar/Mine'

//引入 lgge 组件
import ShopList from '../components/lgge/shoplist'
import PhotoList from '../components/lgge/photolist'
import NewsList from '../components/lgge/newslist'
import WeiWeiTao from '../components/lgge/weiweitao'
import ShaiYiShai from '../components/lgge/shaiyishai'
import ShouCangJia from '../components/lgge/shoucangjia'

// 引入 lgge-info 组件
import PhotoInfo from '../components/lgge/lgge-info/photoinfo'
import ShopInfo from '../components/lgge/lgge-info/shopInfo/shopinfo'
import ShopDescription from '../components/lgge/lgge-info/shopdescription'
import ShopComment from '../components/lgge/lgge-info/shopcomment'

// 引入 Home 组件
import YouHaoHuo from '../components/Home/YouHaoHuo'
import buyYouHaoHuoShop from '../components/Home/PublicCom/buyYouHaoHuoShop'
import buyYouHaoHuoInfoShop from '../components/Home/PublicCom/buyYouHaoHuoInfoShop'
import AiGuangJie from '../components/Home/AiGuangJie'
import buyAiGuangJieInfoShop from '../components/Home/PublicCom/buyAiGuangJieInfoShop'
import CaiNiLike from '../components/Home/CaiNiLike(buyCaiNiLikeShop)'

// 引入home 下商品评论组件
import youHaoHuoShopComment from '../components/Home/PublicCom/comment/youHaoHuoShopComment'
import youHaoHuoInfoShopComment from '../components/Home/PublicCom/comment/youHaoHuoInfoShopComment'
import aiGuangJieInfoShopComment from '../components/Home/PublicCom/comment/aiGuangJieInfoShopComment'
import caiNiLikeShopComment from '../components/Home/PublicCom/comment/caiNiLikeShopComment'

//引入Mine组件
import setting from '../components/Mine/setting/setting'
import register from '../components/Mine/setting/settings/register'
import login from '../components/Mine/setting/settings/login'
import About from '../components/Mine/setting/settings/About'
import Current from '../components/Mine/setting/settings/Current'
import News from '../components/Mine/setting/settings/News'
import Privacy from '../components/Mine/setting/settings/Privacy'
import Address from '../components/Mine/setting/settings/Address'
import addAddress from '../components/Mine/setting/settings/address/addAddress'

// allOrder
import AllOrder from '../components/Mine/allOrder/allOrder'
import All from '../components/Mine/allOrder/all'
import Payment from '../components/Mine/allOrder/payment'
import WaitFaHuo from '../components/Mine/allOrder/waitfahuo'
import ToBoReceived from '../components/Mine/allOrder/tobereceived'

//GoPay
import GoPay from '../components/GoPay/goPay'

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
    { path:'/home/shaiyishai',component:ShaiYiShai },
    { path:'/home/shoucangjia',component:ShouCangJia },


    { path:'/home/photoinfo/:id',component:PhotoInfo },
    { path:'/home/shopinfo/:id',component:ShopInfo },
    { path:'/home/shopdescription/:id',component:ShopDescription},
    { path:'/home/shopcomment/:id',component:ShopComment },

    { path:'/home/youhaohuo/:id',component:YouHaoHuo },
    { path:'/home/buyyouhaohuoshop/:id',component:buyYouHaoHuoShop},
    { path:'/home/buyyouhaohuoinfoshop/:id',component:buyYouHaoHuoInfoShop},
    { path:'/home/aiguangjie',component:AiGuangJie},
    { path:'/home/buyaiguangjieinfoshop/:id',component:buyAiGuangJieInfoShop},
    { path:'/home/cainilike/:id',component:CaiNiLike},

    { path:'/home/youHaoHuoShopComment/:id',component:youHaoHuoShopComment},
    { path:'/home/youHaoHuoInfoShopComment/:id',component:youHaoHuoInfoShopComment},
    { path:'/home/aiGuangJieInfoShopComment/:id',component:aiGuangJieInfoShopComment},
    { path:'/home/caiNiLikeShopComment/:id',component:caiNiLikeShopComment},

    { path:'/mine/setting',component:setting },
    { path:'/mine/register',component:register },
    { path:'/mine/login',component:login },
    { path:'/mine/about',component:About },
    { path:'/mine/current',component:Current},
    { path:'/mine/news',component:News },
    { path:'/mine/privacy',component:Privacy },
    { path:'/mine/address',component:Address },
    { path:'/mine/addAddress',component:addAddress},
    { path:'/mine/allorder',
      component:AllOrder,
        children:[
          { path:'/mine/allorder/all',component:All },
          { path:'/mine/allorder/payment',component:Payment },
          { path:'/mine/allorder/waitfahuo',component:WaitFaHuo },
          { path:'/mine/allorder/tobereceived',component:ToBoReceived },
        ]
    },

    { path:'/gopay',component:GoPay }
  ]
})
