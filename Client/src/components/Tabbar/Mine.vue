<template>
  <div class="mine-container">
    <div class="goSetting">
      <a href="javascript:;" @click="goSetting"><i class="icon iconfont icon-shezhi1"></i></a>
    </div>
    <div class="mine-header">
      <div class="mine-name">
        <p>{{ !$store.state.user.username ? `请登录` : `${$store.state.user.username}` }}</p>
      </div>
      <div class="mine-img">
        <img src="../../lib/img/other/header.png">
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          我的订单<p class="alldingdan" @click="goAllOrder">查看全部订单<i class="icon iconfont icon-youjiantou"></i></p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner" id="tubiao">
          <a href="javascript:;" @click="goPayment"><i class="icon iconfont icon-daifukuan1" style="font-size: 40px;color: rgb(255,102,0)"></i></a>
          <a href="javascript:;" @click="goWaitFaHuo"><i class="icon iconfont icon-iocn-zhonggao_daifahuo" style="font-size: 40px;color: rgb(255,102,0)"></i></a>
          <a href="javascript:;" @click="goTobeReceived"><i class="icon iconfont icon-daishouhuo" style="font-size: 40px;color: rgb(255,102,0)"></i></a>
          <a href="javascript:;"><i class="icon iconfont icon-tuikuanshouhou" style="font-size: 40px;color: rgb(255,102,0)"></i></a>
        </div>
        <p class="tubiao-say"><span>待付款</span><span>待发货</span><span>待收货</span><span>退款/售后</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mine",
    data(){
      return{
      }
    },
    methods:{
      // 跳转到设置页面
      goSetting(){
        this.$router.push('/mine/setting')
      },
    //  跳转到全部订单页面
      goAllOrder(){
        this.$router.push('/mine/allorder')
      },
      goPayment(){
        this.$router.push('/mine/allorder/payment')
      },
      goWaitFaHuo(){
        this.$router.push('/mine/allorder/waitfahuo')
      },
      goTobeReceived(){
        this.$router.push('/mine/allorder/tobereceived')
      }
    }
  }
</script>

<style>
  body{
    background-color: white;
  }
  .mine-container{
    margin: 10px 5px;
  }
  .goSetting{
    padding-left: 95%;
  }
  .mine-img img{
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
  .mine-name{
    float: right;
  }
  .mine-name p{
    padding: 20px 219px 20px 0;
    margin: -5px;
    font-size: 25px;
    color: #222222;
  }
  .mine-header{
    margin: 0 0 20px;
  }
  .alldingdan{
    float: right;
    font-size: 13px;
  }
  #tubiao{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .tubiao-say{
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  }
</style>
