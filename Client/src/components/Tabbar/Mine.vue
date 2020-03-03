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
          <a href="javascript:;" @click="goAllOrder"><i class="icon iconfont icon-daifukuan1" style="font-size: 40px;color: rgb(255,102,0)"></i></a>
          <a href="javascript:;" @click="goAllOrder"><i class="icon iconfont icon-iocn-zhonggao_daifahuo" style="font-size: 40px;color: rgb(255,102,0)"></i></a>
          <a href="javascript:;" @click="goAllOrder"><i class="icon iconfont icon-daishouhuo" style="font-size: 40px;color: rgb(255,102,0)"></i></a>
          <a href="javascript:;"><i class="icon iconfont icon-tuikuanshouhou" style="font-size: 40px;color: rgb(255,102,0)"></i></a>
        </div>
        <p class="tubiao-say"><span>待付款</span><span>待发货</span><span>待收货</span><span>退款/售后</span></p>
      </div>
    </div>

    <br>

    <div class="mui-card">
      <div class="mui-card-header">
        <p class="gju">必备工具</p>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="firstline">
            <i class="icon iconfont icon-return" style="font-size: 40px;color: red"></i>
            <i class="icon iconfont icon-sheng" style="font-size:40px;color: #26A2FF"></i>
            <i class="icon iconfont icon-qian" style="font-size: 30px;color: #cf2d28"></i>
          </div>
          <p class="gju-p"><span>每日返现</span><span>省钱消消消</span><span>闲置换钱</span></p>
          <div class="firstline">
            <i class="icon iconfont icon-wodekuaidi-" style="font-size: 40px;color: blue"></i>
            <i class="icon iconfont icon-00000" style="font-size:40px;color: green"></i>
            <i class="icon iconfont icon-huanfu" style="font-size: 30px;color: blueviolet"></i>
          </div>
          <p class="gju-p2"><span>我的快递</span><span>天天农场</span><span>主体换肤</span></p>
        </div>
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
    //  跳转到订单页面
      goAllOrder(){
        this.$router.push('/mine/allorder/payment')
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
    color: #222222;
  }
  .gju{
    color: #222222;
    font-size: 14px;
    margin: 0;
  }
  .firstline{
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  .gju-p{
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    color: #222222;
    font-size: 13px;
    padding-left: 5px;
    margin: 0 0 10px;
  }
  .gju-p2{
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    color: #222222;
    font-size: 13px;
    padding-left: 5px;
    margin: 0;
  }
</style>
