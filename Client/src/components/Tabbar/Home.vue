<template>
  <div class="Home-container">
<!--    轮播图区域 -->
<!--    auto 毫秒值 -->
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe>
<!--     六宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shoplist">
          <img src="../../lib/img/lgge/1.png">
        <div class="mui-media-body">商品列表</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
        <img src="../../lib/img/lgge/2.png">
        <div class="mui-media-body">商品展示</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
        <img src="../../lib/img/lgge/3.png">
        <div class="mui-media-body">新闻资讯</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/weiweitao">
        <img src="../../lib/img/lgge/4.png">
        <div class="mui-media-body">微微淘</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shaiyishai">
        <img src="../../lib/img/lgge/5.png">
        <div class="mui-media-body">晒一晒</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shoucangjia">
        <img src="../../lib/img/lgge/6.png">
        <div class="mui-media-body">收藏夹</div>
        </router-link></li>
    </ul>
    <div class="middle">
      <mt-swipe :auto="10000">
        <mt-swipe-item v-for="item in lunbotu2List" :key="item.id">
          <img id="lun2" :src="item.img_url">
        </mt-swipe-item>
      </mt-swipe>
   <div class="goods-inner">
       <img class="good" src="//img.alicdn.com/tfs/TB1tqpnegMPMeJjy1XcXXXpppXa-148-48.png" title="有好货">
     <img id="erweima" src="https://img.alicdn.com/tfs/TB17e_6e3MPMeJjy1XcXXXpppXa-380-382.png" alt="有好货">
       <p id="subtitle">
         与品质生活不期而遇</p>
     <!--   id : 41-46 -->
     <ul class="goods-list">
       <router-link v-for="item in youhaohuoList" :key="item.id" :to="'/home/youhaohuo/'+item.id">
         <div class="img">
           <img class="goods-img" :src="item.img_url">
         </div>
         <div class="goods-info">
           <h4 class="a-all">{{ item.title }}</h4>
           <p>{{ item.subtitle }}</p>
           <p class="extra">
             <i class="icon iconfont icon-xiaolian"></i>
             {{ item.num }}人说好</p>
         </div>
       </router-link>
     </ul>
   </div>
      <div class="shop-inner">
        <img class="shop" src="//img.alicdn.com/tfs/TB1UNX2bSFRMKJjy0FhXXX.xpXa-112-46.png">
        <p class="subtitle">献给聪明可爱的你
          <router-link class="router-link" to="/home/aiguangjie">更多<i class="icon iconfont icon-icon_A"></i></router-link>
        </p>
<!--        id: 1-6 （不用）-->
        <ul class="shops-list">
          <li class="shop-li" v-for="item in aiguangjieList" :key="item.id" @click="goInfo">
            <div class="shop-img">
              <img :src="item.img_url">
            </div>
            <div class="shop-info">
              <p class="shop-subtitle">{{ item.title }}</p>
              <div class="shop-extra">
                <div class="img-extra">
                  <img :src="item.header">
                </div>
                <p class="name">{{ item.name }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="end">
      <div class="layer">
<!--        id:230-259 -->
        <h3 class="hd">猜你喜欢</h3>
        <hr>
        <div class="like-list">
          <div class="like-item" v-for="item in cainilikeList" :key="item.id">
          <router-link :to="'/home/cainilike/'+item.id">
            <div class="item-img">
              <img :src="item.img_url">
            </div>
            <h4>{{ item.title }}</h4>
          </router-link>
          <p class="like-info">
              <span class="like-price">
                <small>￥</small>{{ item.like_price }}
              </span>
            <span class="like-sales">销量：{{ item.like_sales }}</span>
          </p>
        </div>
        </div>
      </div>
      <div id="end">
        <p>END</p>
        <p style="font-family:arial;">&copy; 2019-现在版权所有 </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return{
            lunbotuList:[], // 获取轮播图
            lunbotu2List:[],
            youhaohuoList:[],
            aiguangjieList:[],
            cainilikeList:[]
          }
      },
      created(){
          this.getlunbo();
          this.getLunBoTu2();
          this.getYouHaoHuo();
          this.getAiGuangJie();
          this.getCaiNiLike()
      },
      methods:{
        // 获取'轮播图'数据
          async getlunbo(){
            const res = await this.$axios.get('/getlunbotu',this.model);
            // console.log(res)
            if(res.status === 200 ){
              this.lunbotuList = res.data
             }
          },
        // 获取'第二个轮播图'数据
        async getLunBoTu2(){
            const res = await this.$axios.get('/getlunbotu2',this.model);
            // console.log(res)
          if(res.status === 200 ){
            this.lunbotu2List = res.data
          }
        },
        // 获取'有好货'数据
        async getYouHaoHuo(){
            const res = await this.$axios.get('/getyouhaohuo',this.model);
            // console.log(res)
          if(res.status === 200 ){
            this.youhaohuoList = res.data
          }
        },
        // 获取'爱逛街'数据
        async getAiGuangJie(){
            const res = await this.$axios.get('/getaiguangjie',this.model);
            // console.log(res)
          if(res.status === 200 ){
            this.aiguangjieList = res.data
          }
        },
        // 获取'猜你喜欢'数据
        async getCaiNiLike(){
            const res = await this.$axios.get('/getcainilike',this.model);
            // console.log(res)
          if(res.status === 200 ){
            this.cainilikeList = res.data
          }
        },
         // 跳转到'爱逛街'页面
        goInfo(){
            this.$router.push('/home/aiguangjie')
        }
      }
    }
</script>

<style>
  /* 设置轮播图区域高度 */
  .mint-swipe{
    height: 150px;
  }
  img{
    width: 100%;
    height: 150px;
  }
  /* 设置六宫格样式 */
  body{
    background-color: white;
  }
  .mui-table-view.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
  }
  .mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3{
    border: none;
  }
  /* 设置六宫格图标和字体大小 */
  li img{
    width: 50px;
    height: 50px;
  }
  .mui-media-body{
    font-size: 11px;
  }
  .middle .mint-swipe{
    height: 50px;
  }
  .goods-inner{
    margin: 20px 15px 15px;
  }
  .good{
    width: 80px;
    height: 25px;
  }
  #erweima{
    width: 20px;
    height: 20px;
  }
  #subtitle{
    float: right;
    margin: 0 35% 0 0;
    color: #bbbbbb;
    font-size: 13px;
    height: 25px;
    padding-top: 5px;
  }
  .goods-list{
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .goods-img{
    width: 115px;
    height: 115px;
  }
  .goods-info{
    width: 110px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .a-all{
    font-size: 12px;
  }
  .goods-info p{
    font-size: 12px;
  }
  .extra{
    color: #53bfe6;
  }
  .shop{
    width: 80px;
    height: 25px;
  }
  .shop-inner{
    margin: 15px;
  }
  .subtitle{
    padding-top: 3px;
    color: #bbbbbb;
    float: right;
  }
  .subtitle a{
    margin-left:100px;
  }
  .shop-img img{
    width: 115px;
    height: 115px;
  }
  .shops-list{
    list-style: none;
    margin: 15px 0;
    padding: 0;
  }
  .shop-li{
    width: 115px;
    height: 180px;
  }
  .shop-subtitle{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #222222;
  }
  .img-extra{
    float: left;
  }
  .img-extra img{
    width: 20px;
    height: 20px;
  }
  .name{
    padding-left: 5px;
    font-size: 12px;
    height: 21px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .shops-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .hd{
    font-size: 25px;
    font-family: 楷体;
    color: rgb(255,159,0);
    line-height: 48px;
  }
  .item-img img{
    width: 115px;
    height: 115px;
  }
  .end{
    margin: 15px;
  }
  .like-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .like-item{
    width: 115px;
  }
  .like-item h4{
    font-size: 12px;
    width: 115px;
    color: #222222 ;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .like-info{
    display: flex;
    justify-content: space-between;
  }
  .like-price{
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .like-sales{
    font-size: 12px;
  }
  #end{
    width: 100%;
    height: 50px;
    background-color: #bbbbbb;
  }
  #end p{
    text-align: center;
    margin: 5px 0 0;
    padding: 0;
    font-size: 12px;
  }
  #lun2{
    height: 50px;
  }
  .router-link{
    color: rgb(255,69,104);
  }
</style>
