<template>
    <div class="shopinfo-container">
<!--      钩子函数实现半场动画 -->
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
        <div class="ball" id="ball" v-if="ballFlag"></div>
      </transition>

<!-- 图片展示区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-swipe :auto="3000">
              <mt-swipe-item v-for="item in shopInfoImg" :key="item.img_url">
                <img id="shopinfo-img" :src="item.img_url">
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>

      <!-- 商品购买区域 -->
      <div class="mui-card">
        <div class="mui-card-content" id="shopinfo-title">{{ shopInfo.title }}</div>
          <div class="mui-card-content-inner">
            <p class="price">
              市场价：<del>￥{{ shopInfo.old_price }}</del>&nbsp;&nbsp;销售价：<span class="nowPrice">￥{{ shopInfo.new_price }}</span>
            </p>
            <p>购买数量：<Numbox></Numbox> </p>
            <p>
              <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
              <mt-button type="primary" size="small">立即购买</mt-button>
            </p>
          </div>
        </div>

        <!-- 商品参数区域-->
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：{{ shopInfo.shop_number }}</p>
            <p>上架时间：{{ shopInfo.add_time | dataFilter }}</p>
            <p>库存情况：{{ shopInfo.last_item }}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large">图文介绍</mt-button>
          <mt-button type="danger" size="large">商品评价</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Numbox from '../../components/publicCom/shopinfo-numbox'

    export default {
        name: "shopinfo",
      components:{Numbox},
      data(){
          return{
            id:this.$route.params.id,
            shopInfo:{},
            shopInfoImg:[],
            ballFlag:false //控制小球显示隐藏
          }
      },
      created(){
          this.getShopInfo();
          this.getShopInfoImg()
      },
      methods:{
          async getShopInfo(){
            const res = await this.$axios.get('/getshopinfo/'+this.id,this.model);
            // console.log(res )
            if (res.status === 200) {
              this.shopInfo = res.data[0]
            }
          },
        async getShopInfoImg(){
            const res = await this.$axios.get('/getshopinfoimg/'+this.id,this.model);
            // console.log(res)
            if (res.status === 200) {
            this.shopInfoImg = res.data
           }
         },
        addToShopCar(){ // 添加至购物车
            this.ballFlag = !this.ballFlag
        },
        // 钩子函数实现半场动画
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el){
          el.offsetWidth;
          // 问题：不同分辨率下小球移动距离
          //  解决：不能把位置横纵坐标写死，根据不同情况动态计算这个坐标值
          //     先得到徽标的横纵坐标再得到小球的横纵坐标，然后横坐标值求差，纵坐标值求差，结果就是要移动的距离

          //  小球横纵坐标
            const ballLeft = document.getElementById('ball').getBoundingClientRect().left;
            const ballTop = document.getElementById('ball').getBoundingClientRect().top;
            // console.log(ballLeft)
            // console.log(ballTop)
          //  徽标横纵坐标
            const shopCarLeft = document.getElementById('shopCar').getBoundingClientRect().left;
            const shopCarTop = document.getElementById('shopCar').getBoundingClientRect().top;
            // console.log(shopCarLeft)
            // console.log(shopCarTop)
            const X = shopCarLeft - ballLeft;
            const Y = shopCarTop - ballTop;
            // console.log(X,Y)
            el.style.transform = `translate(${X}px,${Y}px)`;
            //  cubic-bezier(.54,-0.27,1,.67) 贝塞尔曲线
            el.style.transition = "all 1s cubic-bezier(.05,.66,1,.45)";
        },
        afterEnter(el){
            this.ballFlag = false
        }
       }
    }
</script>

<style>
  .mint-swipe{
    height:150px;
  }
  #shopinfo-img{
    height: 100%;
    width: 100%;
  }
  #shopinfo-title{
    padding: 10px 10px 0;
    font-size: 15px;
    font-weight: bold;
  }
  .shopinfo-container{
    background-color: #eee;
    overflow: hidden;
  }
  .nowPrice{
    color: red;
    font-size: 15px;
    font-weight: bold;
  }
  .mui-card-footer{
    display: block;
  }
  .mui-card-footer button{
    margin: 5px 0;
  }
  .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 999;
    top: 349px;
    left: 147px;
  }
</style>
