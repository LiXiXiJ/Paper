<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" id="back" to="/mine">返回</router-link>
      <h1 class="mui-title">新消息通知</h1>
      <h1 class="new">抱歉，尚未开启该功能！</h1>
    </header>
  </div>
</template>

<script>
    export default {
        name: "News"
    }
</script>

<style>
  .new{
    font-size: 12px;
    color: darkgray;
    text-align: center;
    margin-top: 50%;
  }
  #back{
    font-size: 13px;
    height: 44px;
    margin-top: 7px;
  }
</style>
