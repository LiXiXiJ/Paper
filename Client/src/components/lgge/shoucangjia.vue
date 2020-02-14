<template>
    <div class="shoucangjia-container">
      <div class="guanli">
        <mt-button type="primary" size="small" v-if="guanLiFlag" @click="show">管理</mt-button>
        <mt-button type="primary" size="small" v-else @click="show">完成</mt-button>
      </div>
      <div class="shoucangjia-all">
        <p>全部宝贝</p>
      </div>
      <div class="shoucangjia-list">
            <div class="shouchangjia-img">
              <img src="https://img.alicdn.com/imgextra/i3/1840508859/TB227FSgHGYBuNjy0FoXXciBFXa_!!1840508859-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp">
            </div>
            <div class="shoucangjia-info">
              <p class="info-title">维生素我试试是是是少时诵诗书所所所所所所所所</p>
              <p class="shoucangjia-button"><mt-button plain="plain" size="small" type="danger" v-show="shouCFlag">取消收藏</mt-button></p>
              <p class="info-price"><span>￥</span>27.9</p>
            </div>
      </div>
      <div class="shoucangjia-list">
        <div class="shouchangjia-img">
          <img src="https://img.alicdn.com/imgextra/i3/1840508859/TB227FSgHGYBuNjy0FoXXciBFXa_!!1840508859-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp">
        </div>
        <div class="shoucangjia-info">
          <p class="info-title">维生素我试试是是是少时诵诗书所所所所所所所所</p>
          <p class="shoucangjia-button"><mt-button plain="plain" size="small" type="danger" v-show="shouCFlag">取消收藏</mt-button></p>
          <p class="info-price"><span>￥</span>27.9</p>
        </div>
      </div>
      <div class="shoucangjia-list">
        <div class="shouchangjia-img">
          <img src="https://img.alicdn.com/imgextra/i3/1840508859/TB227FSgHGYBuNjy0FoXXciBFXa_!!1840508859-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp">
        </div>
        <div class="shoucangjia-info">
          <p class="info-title">维生素我试试是是是少时诵诗书所所所所所所所所</p>
          <p class="shoucangjia-button"><mt-button plain="plain" size="small" type="danger" v-show="shouCFlag">取消收藏</mt-button></p>
          <p class="info-price"><span>￥</span>27.9</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shoucangjia",
      data(){
          return{
            guanLiFlag:true,
            shouCFlag:false
          }
      },
      methods:{
          show(){
            this.guanLiFlag = !this.guanLiFlag;
            this.shouCFlag = !this.shouCFlag
          }
      }
    }
</script>

<style>
  body{
    background-color: white;
  }
  .shoucangjia-container{
    margin: 10px;
    overflow: hidden;
    background: url(//img.alicdn.com/tps/i2/TB1AhAlHpXXXXX6XVXXz3jiHXXX-990-100.gif) -548px 0 no-repeat;
  }
  .guanli{
    float: right;
  }
  .shoucangjia-all{
    margin: 30px 8px 20px;
  }
  .shoucangjia-all p{
    color: black;
    font-size: 15px;
  }
  .shouchangjia-img img{
    width: 130px;
    height: 130px;
    float: left;
  }
  .shoucangjia-info{
    float: right;
    width: 60%;
  }
  .info-title{
    color: black;
    font-size: 15px;
    text-indent: 2em;
  }
  .info-price span{
    font-size: 12px;
  }
  .info-price{
    color: crimson;
    font-size: 17px;
    margin-top: 60px;
  }
  .shoucangjia-button{
    float: right;
    margin-top: 40px;
  }
  .shoucangjia-list{
    overflow: hidden;
    margin-top: 5px;
  }
</style>
