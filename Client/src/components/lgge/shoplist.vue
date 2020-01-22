<template>
    <div class="goods-list">
      <div class="goods-item">
      <img src="../../lib/img/lunbo/run.jpg">
      <h1 class="title">跑步机哒哒哒哒哒哒</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥799</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
      </div>
        <div class="goods-item">
          <img src="../../lib/img/lunbo/run.jpg">
          <h1 class="title">跑步机哒哒哒哒哒哒哒哒哒哒哒</h1>
          <div class="info">
            <p class="price">
              <span class="now">￥799</span>
              <span class="old">￥999</span>
            </p>
            <p class="sell">
              <span>热卖中</span>
              <span>剩60件</span>
            </p>
          </div>
    </div>
      <div class="goods-item">
        <img src="../../lib/img/lunbo/run.jpg">
        <h1 class="title">跑步机哒哒哒哒哒哒哒哒哒哒哒</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥799</span>
            <span class="old">￥999</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shoplist",
      data() {
        return {
        };
      },
      methods: {
      }
    }
</script>

<style>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 2px 4px;
    /*两端对齐*/
    justify-content: space-between;
  }
  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 4px #ccc;
    margin: 2px 0 ;
    padding: 0.5px;
    /*设置最低高度*/
    min-height: 160px;
    /*解决文字下部空白区域，设置flex布局上下为主轴，然后两端对齐*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  img{
    width: 100%;
  }
  .title{
    font-size: 15px;
  }
  p{
    margin: 0;
    padding: 1px;
  }
  .info{
    background-color: #eee;
  }
  .now{
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .old{
    text-decoration: line-through;
    font-size: 13px;
    margin-left: 10px;
  }
  .sell{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
</style>
