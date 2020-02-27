<template>
    <div class="payment-container">
      <div class="mui-card" v-if="paymentItem">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="payment">
              <i class="icon iconfont icon-dingdan" style="font-size: 50px;color: white"></i>
            </div>
            <div class="payment2">
              <p class="payment-p">您还没有相关的订单</p>
              <p>可以去看看有哪些想买的</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mui-card" v-else v-for="(item,i) in paymentItem" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="all1">
              <p class="all-name">奔波儿灞旗舰店</p>
              <p class="succ">待付款</p>
            </div>
            <div class="all-2">
              <div class="all-img">
                <img :src="item.img_url">
              </div>
              <div class="all-title">
                <p class="all2-title">{{ item.title }}</p>
                <p class="all2-price">单价：<span>￥</span>{{ item.like_price || item.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoreLike></MoreLike>
    </div>
</template>

<script>
  import MoreLike from '../../PubliComponents/MoreLike'
    export default {
        name: "payment",
      components:{MoreLike},
      data(){
          return{
            paymentItem:[]
          }
      },
      created(){
      },
      methods: {
      }
    }
</script>

<style>
  .payment{
    width: 80px;
    height: 80px;
    background-color: rgb(255,102,0);
    border-radius: 50%;
    margin: 5px auto;
    padding: 28px 15px;
  }
  .payment-p{
    color: #222222;
    font-size: 14px;
    padding: 0 15px;
  }
  .payment2{
    padding: 5px 80px;
  }
  .all2-price{
    margin: 0;
    padding-top: 15px;
  }
</style>
