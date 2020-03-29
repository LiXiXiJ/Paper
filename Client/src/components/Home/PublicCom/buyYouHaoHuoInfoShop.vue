<template>
  <div class="buy-container">
    <!--      钩子函数实现半场动画 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" id="ball" v-if="ballFlag"></div>
    </transition>

    <div class="buy-img">
      <img :src="buyYouHaoHuoInfoShop.img_url">
    </div>
    <div class="buy-info">
      <p class="buy-price"><span>￥</span>{{ buyYouHaoHuoInfoShop.price }}</p>
      <p class="buy-title">{{ buyYouHaoHuoInfoShop.title }}</p>
    </div>
    <div class="buy-fahuo">
      <p id="yuexiao">月销{{ buyYouHaoHuoInfoShop.num }}</p>
      <p class="fahuo"><span>发货</span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon iconfont icon-position"></i>广东深圳&nbsp;&nbsp;|&nbsp;&nbsp;快递:免运费</p>
      <p class="huodong"><span>活动</span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon iconfont icon-hongbao" style="color: red"></i>红包省钱卡,开卡本单立减！</p>
      <p class="fuwu"><span>服务</span>&nbsp;&nbsp;&nbsp;&nbsp;7天无理由</p>
    </div>
    <div class="buy-numbox">
      <p>
        <span>购买数量</span>
        <NumBox @getCount = getNumBoxCount></NumBox>
      </p>
      <p>
        <mt-button type="danger" size="small" @click="addToShopCar" >加入购物车</mt-button>
        <mt-button type="primary" size="small" @click="addToShopCar">立即购买</mt-button>
      </p>
    </div>
    <div class="buy-comment">
      <mt-button type="primary" size="large" @click="GoComment">宝贝评论</mt-button>
    </div>
    <div class="shop-collect">
      <p>觉得不错？关注宝贝？</p>
      <a href="javascript:;" @click="guanZhu"><div class="collect">关注</div></a>
    </div>
  </div>
</template>

<script>
  import NumBox from './NumBox/YouHaoHuoShop-NumBox'
  import { Toast } from 'mint-ui';
    export default {
        name: "buyYouHaoHuoShop",
      components:{NumBox},
      data(){
          return{
            id:this.$route.params.id,
            buyYouHaoHuoInfoShop:{},
            ballFlag:false,
            numBoxCount:0
          }
      },
      created() {
          this.getBuyYouHaoHuoShop()
      },
      methods:{
          // 获取商品信息
          async getBuyYouHaoHuoShop(){
            const res = await this.$axios.get('/getbuyyouhaohuoshop/'+this.id,this.model);
            // console.log(res.data)
            if (res.status === 200) {
              this.buyYouHaoHuoInfoShop = res.data
            }
          },
        // 收藏商品
        guanZhu(){
            if (localStorage.getItem('token') == '') {
              return Toast('请先登录')
            }
          const shouCJObj = {
            id:this.buyYouHaoHuoInfoShop.id,
            title:this.buyYouHaoHuoInfoShop.title,
            img_url:this.buyYouHaoHuoInfoShop.img_url,
            price:this.buyYouHaoHuoInfoShop.price
          };
          this.$axios.post('/postshoucangjia',shouCJObj).then((res) => {
            //
          })
        },
        // 跳转到评论页面
        GoComment(){
          if (localStorage.getItem('token') == '') {
            return Toast('请先登录')
          }
          this.$router.push('/home/youHaoHuoInfoShopComment/'+this.id)
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
          //  cubic-bezier贝塞尔曲线
          el.style.transition = "all 0.6s cubic-bezier(.05,.66,1,.45)";
        },
        afterEnter(el){
          this.ballFlag = false
        },
        getNumBoxCount(count){
          this.numBoxCount = count
          // console.log('父组件拿到'+this.numBoxCount)
        },
        // 加入购物车
        addToShopCar(){
          if (localStorage.getItem('token') == '') {
            return Toast('亲，要登录购买哦！')
          }
          if (this.numBoxCount === 0) {
            return Toast('请勾选要购买的数量')
          }
          this.ballFlag = !this.ballFlag;

        //   拼接出一个加入购物车的商品对象，保存到 store 中
          const YHHInfoShop = {
            id:this.id,
            count:this.numBoxCount,
            price:this.buyYouHaoHuoInfoShop.price,
            selected:true
          };
          this.$store.commit('YHHInfoSelectShopAddToShopCar',YHHInfoShop)
        }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .buy-img{
    width: 100%;
    height: 250px;
    margin: 10px;
  }
  .buy-img img{
    width: 95%;
    height: 100%;
  }
  .buy-info{
    border: #e8e8e8 1px solid;
    margin: 5px;
  }
  .buy-price span{
    font-size: 4px;
  }
  .buy-price{
    margin: 5px 5px 5px;
    padding-left: 10px;
    color: crimson;
    font-size: 20px;
  }
  .buy-title{
    margin: 5px 5px 5px;
    padding-left: 10px;
    color: #222222;
    font-size: 16px;
    font-weight: bold;
  }
  .buy-fahuo{
    border: #e8e8e8 1px solid;
    margin: 5px;
  }
  .buy-fahuo p{
    margin: 10px 5px 10px;
    padding-left: 10px;
    color: #222222;
  }
  .buy-fahuo span{
    font-size: 12px;
    color: #bbbbbb;
  }
  #yuexiao{
    float: right;
    font-size: 12px;
    color: #bbbbbb;
  }
  .buy-numbox{
    margin: 5px;
    border: #e8e8e8 1px solid;
  }
  .buy-numbox p{
    margin: 10px 5px;
    padding: 0 0 0 10px;
  }
  .buy-numbox span{
    display: inline-block;
    margin-right: 5%;
  }
  .buy-comment{
    margin: 5px;
  }
  .shop-collect{
    margin: 20px;
    height: 30px;
  }
  .shop-collect p{
    font-size: 14px;
    color: #26A2FF;
    float: left;
    padding-top: 5px;
  }
  .collect{
    width: 60px;
    height: 30px;
    background-color: #ef4f4f;
    text-align: center;
    color: white;
    border-radius: 15px;
    float: right;
    padding-top: 3px;
  }
  .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 999;
    top: 513px;
    left: 151px;
  }
</style>
