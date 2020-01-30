<template>
    <div class="shopinfo-container">

      <!-- 商品购买区域 -->
      <div class="mui-card">
        <div class="mui-card-content" id="shopinfo-title">{{ shopInfo.title }}</div>
          <div class="mui-card-content-inner">
            <p class="price">
              市场价：<del>￥{{ shopInfo.old_price }}</del>&nbsp;&nbsp;销售价：<span class="nowPrice">￥{{ shopInfo.new_price }}</span>
            </p>
            <p>购买数量：<Numbox></Numbox> </p>
            <p>
              <mt-button type="danger" size="small">加入购物车</mt-button>
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
          <mt-button type="primary" size="large" >图文介绍</mt-button>
          <mt-button type="danger" size="large">商品评论</mt-button>
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
            shopInfo:{}
          }
      },
      created(){
          this.getShopInfo()
      },
      methods:{
          async getShopInfo(){
            const res = await this.$axios.get('/getshopinfo/'+this.id,this.model);
            // console.log(res )
            if (res.status === 200) {
              this.shopInfo = res.data[0]
            }
          }
      }
    }
</script>

<style>
  #shopinfo-title{
    padding: 5px 5px 0;
    font-size: 15px;
    font-weight: bold;
  }
  .shopinfo-container{
    background-color: #eee;
    overflow: hidden;
  }
  .shopinfolunbo img{
    height: 100%;
    width: 100%;
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
</style>
