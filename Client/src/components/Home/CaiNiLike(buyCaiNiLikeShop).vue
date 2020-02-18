<template>
  <div class="buy-container">
    <div class="buy-img">
      <img :src="BuyCaiNiLikeShop.img_url">
    </div>
    <div class="buy-info">
      <p class="buy-price"><span>￥</span>{{ BuyCaiNiLikeShop.like_price }}</p>
      <p class="buy-title">{{ BuyCaiNiLikeShop.title }}</p>
    </div>
    <div class="buy-fahuo">
      <p id="yuexiao">月销{{ BuyCaiNiLikeShop.like_sales }}</p>
      <p class="fahuo"><span>发货</span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon iconfont icon-position"></i>四川成都&nbsp;&nbsp;|&nbsp;&nbsp;快递:免运费</p>
      <p class="huodong"><span>活动</span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon iconfont icon-hongbao" style="color: crimson"></i>红包省钱卡,开卡本单立减！</p>
      <p class="fuwu"><span>服务</span>&nbsp;&nbsp;&nbsp;&nbsp;7天无理由</p>
    </div>
    <div class="buy-numbox">
      <p>
        <span>购买数量</span>
        <NumBox></NumBox>
      </p>
      <p>
        <mt-button type="danger" size="small">加入购物车</mt-button>
        <mt-button type="primary" size="small">立即购买</mt-button>
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
  import NumBox from './PublicCom/homebuy-numbox'
    export default {
        name: "CaiNiLike",
      components:{NumBox},
      data(){
          return{
            id:this.$route.params.id,
            BuyCaiNiLikeShop:{}
          }
      },
      created(){
        this.getBuyCaiNiLikeShop()
      },
      methods:{
          async getBuyCaiNiLikeShop(){
            const res = await this.$axios.get('/getbuycainilikeshop/'+this.id,this.model);
            // console.log(res.data)
            if (res.status === 200) {
              this.BuyCaiNiLikeShop = res.data
            }
          },
        guanZhu(){
          const shouCJObj = {
            id:this.BuyCaiNiLikeShop.id,
            title:this.BuyCaiNiLikeShop.title,
            img_url:this.BuyCaiNiLikeShop.img_url,
            price:this.BuyCaiNiLikeShop.like_price
          };
          this.$axios.post('/postshoucangjia',shouCJObj).then((res) => {
            // 收藏商品
          })
        },
        GoComment(){
            this.$router.push('/home/caiNiLikeShopComment/'+this.id)
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
</style>
