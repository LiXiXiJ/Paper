<template>
    <div class="all-container">
      <div class="mui-card">
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
      <MoreLike></MoreLike>
    </div>
</template>

<script>
  // 退款、售后页面
  import MoreLike from '../../PubliComponents/MoreLike'
    export default {
        name: "all",
      components:{MoreLike},
      data(){
          return{
            //
          }
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
  .all1{
    display: flex;
    justify-content: space-between;
  }
  .all-name{
    color: black;
    font-weight: bold;
    font-size: 15px;
  }
  .succ{
    color: rgb(255,102,0);
    font-size: 12px;
  }
  .all-2 {
    display: flex;
    justify-content: space-between;
  }
  .all-img{
    width: 100px;
    height: 100px;
  }
  .all-img img{
    width: 100px;
    height: 100px;
  }
  .all2-title{
    width: 190px;
    height: 60px;
    margin: 0;
    color: black;
    font-size: 14px;
  }
  .all2-price{
    float: right;
  }
  .all2-price{
    color: #222222;
  }
  .all2-price span{
    font-size: 12px;
  }
</style>
