<template>
    <div>
      <header class="mui-bar mui-bar-nav">
        <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" id="back" to="/home">返回</router-link>
        <h1 class="mui-title">反馈</h1>
      </header>
    </div>
</template>

<script>
    export default {
        name: "shop"
    }
</script>

<style>
  #back{
    font-size: 13px;
    height: 44px;
    margin-top: 7px;
  }
</style>
