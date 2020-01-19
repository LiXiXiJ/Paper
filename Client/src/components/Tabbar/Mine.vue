<template>
  <div class="mui-scroll" id="main">
    <ul class="mui-table-view mui-table-view-chevron" id="fir">
      <li class="mui-table-view-cell mui-media">
        <router-link class="mui-navigate-right" to="/mine/login">
          <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../../lib/img/head/shuijiao.jpg">
            <p class='mui-ellipsis' id="p">账号:hellomui</p>
        </router-link>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <router-link to="/mine/trouble" class="mui-navigate-right">问题反馈</router-link>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <router-link to="/mine/news" class="mui-navigate-right">新消息通知</router-link>
      </li>
      <li class="mui-table-view-cell">
        <router-link to="/mine/privacy" class="mui-navigate-right">隐私</router-link>
      </li>
      <li class="mui-table-view-cell">
        <router-link to="/mine/current" class="mui-navigate-right">通用</router-link>
      </li>
    </ul>
    <ul class="mui-table-view mui-table-view-chevron">
      <li class="mui-table-view-cell">
        <router-link to="/mine/about" class="mui-navigate-right">关于购物系统 <i class="mui-pull-right update">V10.10.10</i></router-link>
      </li>
    </ul>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell" style="text-align: center;">
        <button class="mui-btn mui-btn-block mui-btn-primary" id="tuichu">退出登录</button>
      </li>
    </ul>
  </div>

</template>yu++

<script>
  export default {
    name: "Mine"
  }
</script>

<style>
  #fir{
    margin-top: 0;
    height: 75px;
  }
  #p{
    margin-top: 10px;
    height: 20px;
    font-size: 15px;
    color: green;
    text-indent: 3em;
  }
  html,
  body {
    background-color: white;
  }
  .mui-navigate-right{
    font-size: 13px;
    background-color: honeydew;
    margin-top: 0;
  }
  .mui-page .mui-table-view:first-child {
    margin-top: 15px;
  }
  .mui-page .mui-table-view:last-child {
    margin-bottom: 30px;
  }
  .mui-table-view {
    margin-top: 20px;
  }
  .mui-table-view span{
    color: #999;
  }
  .head-img {
    width: 40px;
    height: 40px;
  }
  .update {
    font-style: normal;
    color: #999999;
    margin-right: -25px;
    font-size: 15px
  }
  #feedback .mui-table-view:last-child {
    margin-bottom: 0px;
  }
  #feedback .mui-table-view:first-child {
    margin-top: 0px;
  }
  #tuichu{
    background-color: red;
  }
  .mui-pull-right.update{
    font-size: 12px;
  }
</style>
